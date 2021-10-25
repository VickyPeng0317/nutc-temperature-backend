import { ModifyUserDialogComponent } from './../../dialogs/modify-user-dialog/modify-user-dialog.component';
import { UserService } from './../../../../@core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserListItem } from '@core/services/user.service';
import { NbDialogService } from '@nebular/theme';
import { debounceTime } from 'rxjs/operators';
import { IPageParams } from '@core/models/api-response';
import { ViewUserInfoDialogComponent } from '@feature/user/dialogs/view-user-info-dialog/view-user-info-dialog.component';

@Component({
  selector: 'user-manage-page',
  templateUrl: './user-manage-page.component.html',
  styleUrls: ['./user-manage-page.component.scss']
})
export class UserManagePageComponent implements OnInit {
  columnList = [
    {
      key: 'userName',
      name: '姓名'
    },
    {
      key: 'userAccount',
      name: '帳號'
    },
    {
      key: 'collegeName',
      name: '院別'
    },
    {
      key: 'departmentName',
      name: '部門/科系'
    },
    {
      key: 'departmentSubName',
      name: '職稱/班級'
    },
  ];
  searchForm = new FormGroup({
    userAccount: new FormControl(''),
    userName: new FormControl(''),
  });
  userList: IUserListItem[] = [];
  pageParams: IPageParams = {
    currentPage: 1,
    perPage: 6,
    total: 6
  };
  constructor(
    private dialogService: NbDialogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList();
    this.onSearch();
  }

  /**
   * 監聽查詢
   */
  onSearch() {
    this.searchForm.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(() => {
      this.pageParams.currentPage = 1;
      this.getUserList();
    });
  }
  /**
   * 切換分頁
   */
  pageChange(currentPage) {
    this.getUserList(currentPage);
  }
  /**
   * 取得使用者清單
   */
  getUserList(currentPage = 1) {
    const formData = this.searchForm.getRawValue();
    const params = {
      currentPage,
      perPage: 6,
      ...formData
    };
    this.userService.getUserList(params).subscribe(res => {
      this.userList = res.data;
      this.pageParams = res.pageParams;
      console.log(res);
    });
  }
  openInfoDialog(userId: number) {
    const dialogData = {
      context: { userId }
    };
    this.dialogService.open(ViewUserInfoDialogComponent, dialogData);
  }
}
