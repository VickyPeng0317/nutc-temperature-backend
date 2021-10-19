import { ModifyUserDialogComponent } from './../../dialogs/modify-user-dialog/modify-user-dialog.component';
import { UserService } from './../../../../@core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserListItem } from '@core/services/user.service';
import { NbDialogService } from '@nebular/theme';
import { debounceTime } from 'rxjs/operators';

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

  constructor(
    private dialogService: NbDialogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList();
    this.onSearch();
  }

  onSearch() {
    this.searchForm.valueChanges.pipe(
     debounceTime(300)
    ).subscribe(() => this.getUserList());
  }

  getUserList() {
    this.userList = [];
    const params = this.searchForm.getRawValue();
    this.userService.getUserList(params).subscribe(res => {
      this.userList = res.data;
    });
  }
}
