import { element } from 'protractor';
import { takeUntil, tap, delay } from 'rxjs/operators';
import { Subject, timer, interval } from 'rxjs';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DeviceService, IDeviceInfo } from '@core/services/device.service';
import { NbDialogRef } from '@nebular/theme';
import { ta } from 'date-fns/locale';

@Component({
  selector: 'view-device-info-dialog',
  templateUrl: './view-device-info-dialog.component.html',
  styleUrls: ['./view-device-info-dialog.component.scss']
})
export class ViewDeviceInfoDialogComponent implements OnInit  {
  @ViewChild("deviceCanvas")
  deviceCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;

  @ViewChild("qrcodeRef")
  qrcodeRef: any;
  qrCodeData: string = 'null';

  @Input()
  deviceId: number;
  deviceInfo: IDeviceInfo = <IDeviceInfo>{};

  qrCodeArea = {
    x: 267,
    y: 189,
    size: 1
  };
  stopSubject = new Subject();
  constructor(
    private deviceService: DeviceService,
    protected dialogRef: NbDialogRef<ViewDeviceInfoDialogComponent>,
  ) { }
  initDeviceImg() {
    const deviceImage = new Image();
    deviceImage.src = 'assets/img/mmhg.png';
    deviceImage.onload = () => {
      const { width, height } = deviceImage;
      this.deviceCanvas.nativeElement.width = width;
      this.deviceCanvas.nativeElement.height = height;
      this.context.drawImage(deviceImage, 0, 0, width, height);
    };
  }
  initQrcodeImg() {
    const qrcodeImage = new Image();
    qrcodeImage.src = this.getQrcodeImageBASE64();
    qrcodeImage.onload = () => {
      // const canvasWidth = this.deviceCanvas.nativeElement.width;
      // const canvasHeight = this.deviceCanvas.nativeElement.height;
      // const { width, height } = qrcodeImage;
      // const x = (canvasWidth/2) - (width/2);
      // const y = (canvasHeight/2) - (height/2);
      // this.qrCodeArea.x = x;
      // this.qrCodeArea.y = y;
      this.context.drawImage(qrcodeImage, this.qrCodeArea.x, this.qrCodeArea.y);
    };
  }
  modifyQrcodeImgArea(type: string) {
    interval(10).pipe(
        tap(() => this.initDeviceImg()),
        tap(() => {
          const qrcodeImage = new Image();
          qrcodeImage.src = this.getQrcodeImageBASE64();
          qrcodeImage.onload = () => {
            this.setQrcodeArea(type, qrcodeImage);
            const { x, y, size } = this.qrCodeArea;
            const displayWidth = qrcodeImage.width*size;
            const displayheight = qrcodeImage.height*size;
            this.context.drawImage(qrcodeImage, x, y, displayWidth, displayheight)
          };
        }),
        takeUntil(this.stopSubject),
      ).subscribe()
  }
  setQrcodeArea(type: string, qrcodeImage: HTMLImageElement) {
    const typeLogic = [
      {
        logic: type === 'up',
        action: () => this.qrCodeArea.y = this.qrCodeArea.y - 1,
      },
      {
        logic: type === 'down',
        action: () => this.qrCodeArea.y = this.qrCodeArea.y + 1,
      },
      {
        logic: type === 'right',
        action: () => this.qrCodeArea.x = this.qrCodeArea.x + 1,
      },
      {
        logic: type === 'left',
        action: () => this.qrCodeArea.x = this.qrCodeArea.x - 1,
      },
      {
        logic: type === 'maximize',
        action: () => this.qrCodeArea.size = this.qrCodeArea.size + 0.01,
      },
      {
        logic: type === 'minimize',
        action: () => this.qrCodeArea.size = this.qrCodeArea.size - 0.01,
      },
      {
        logic: type === 'init',
        action: () => {
          const canvasWidth = this.deviceCanvas.nativeElement.width;
          const canvasHeight = this.deviceCanvas.nativeElement.height;
          const { width, height } = qrcodeImage;
          const x = (canvasWidth/2) - (width/2);
          const y = (canvasHeight/2) - (height/2);
          this.qrCodeArea.x = x;
          this.qrCodeArea.y = y
        }
      }
    ];
    typeLogic.find(item => item.logic)?.action();
  }
  ngOnInit(): void {
    const params = { deviceId: this.deviceId };
    this.deviceService.getDeviceInfo(params).pipe(
      tap((res) => {
        this.deviceInfo = res;
        this.qrCodeData = JSON.stringify({ deviceId: this.deviceId });
      }),
      delay(500),
      tap(() => {
        this.context = this.deviceCanvas.nativeElement.getContext('2d');
        this.initDeviceImg();
      }),
      delay(500),
      tap(() => {
        this.initQrcodeImg()
      }),
    ).subscribe();
  }

  getQrcodeImageBASE64() {
    return this.qrcodeRef.qrcElement.nativeElement
        .querySelector("canvas")
        .toDataURL("image/png");
  }
  close() {
    this.dialogRef.close();
  }
}
