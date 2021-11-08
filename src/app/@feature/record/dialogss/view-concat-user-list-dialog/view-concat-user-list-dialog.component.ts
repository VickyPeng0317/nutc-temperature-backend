import { Component, Input, OnInit } from '@angular/core';
import { ExportService } from '@core/services/export.service';
import { IRecordInfo, RecordService } from '@core/services/record.service';
import { NbDialogRef } from '@nebular/theme';
import * as moment from 'moment';

@Component({
  selector: 'view-concat-user-list-dialog',
  templateUrl: './view-concat-user-list-dialog.component.html',
  styleUrls: ['./view-concat-user-list-dialog.component.scss']
})
export class ViewConcatUserListDialogComponent implements OnInit {
  @Input()
  recordInfo: IRecordInfo = {} as IRecordInfo;
  recordList: IRecordInfo[] = [];
  constructor(
    protected dialogRef: NbDialogRef<ViewConcatUserListDialogComponent>,
    private recordService: RecordService,
    private exportService: ExportService
  ) { }

  ngOnInit(): void {
    const { createdTime,  place } = this.recordInfo;
    const params = { createdTime,  place };
    this.recordService.getContactList(params).subscribe(res => {
      this.recordList = res.data;
    });
  }

  breakSearch(recordInfo: IRecordInfo) {
    this.dialogRef.close(recordInfo);
  }

  close() {
    this.dialogRef.close();
  }

  exportExcel() {
    const columnList = [
      {
        key: 'userAccount',
        name: '學號/帳號',
        width: '10%'
      },
      {
        key: 'userName',
        name: '姓名',
        width: '10%'
      },
      {
        key: 'departmentSubName',
        name: '班級/部門',
        width: '10%'
      },
      {
        key: 'place',
        name: '地點',
        width: '10%'
      },
      {
        key: 'temperature',
        name: '體溫',
        width: '10%'
      },
      {
        key: 'createdTime',
        name: '建立時間',
        width: '15%'
      }
    ];
    const { userName, userAccount, createdTime} = this.recordInfo;
    const fileName = `${userAccount}${userName}_接觸清單_${moment(createdTime).format('MMDDHHmm')}`;
    this.exportService.exportExcell(this.recordList, columnList, fileName);
  }

}
