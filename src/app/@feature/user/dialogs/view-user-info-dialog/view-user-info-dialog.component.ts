import { UserService } from './../../../../@core/services/user.service';
import { IUserListItem } from '@core/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'view-user-info-dialog',
  templateUrl: './view-user-info-dialog.component.html',
  styleUrls: ['./view-user-info-dialog.component.scss']
})
export class ViewUserInfoDialogComponent implements OnInit {
  @Input()
  userId: number;
  userInfo: IUserListItem = <IUserListItem>{};
  constructor(
    private userService: UserService,
    private dialogRef: NbDialogRef<ViewUserInfoDialogComponent>
  ) { }

  ngOnInit(): void {
    const userId = this.userId;
    this.userService.getUserInfo({ userId }).subscribe(res => {
      const isSuccess = !!res;
      if (!isSuccess) {
        alert('取得失敗');
        this.dialogRef.close();
        return;
      }
      this.userInfo = res;
    });
  }

  close() {
    this.dialogRef.close();
  }

}
