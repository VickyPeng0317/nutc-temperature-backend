import { Component, Input, OnInit } from '@angular/core';
import { IRecordInfo, RecordService } from '@core/services/record.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'view-concat-user-list-dialog',
  templateUrl: './view-concat-user-list-dialog.component.html',
  styleUrls: ['./view-concat-user-list-dialog.component.scss']
})
export class ViewConcatUserListDialogComponent implements OnInit {
  @Input()
  createdTime: string;
  @Input()
  place: string;
  recordList: IRecordInfo[] = [];
  constructor(
    protected dialogRef: NbDialogRef<ViewConcatUserListDialogComponent>,
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    const params = {
      createdTime: this.createdTime,
      place: this.place
    };
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

}
