import { ModifyUserDialogComponent } from './../../dialogs/modify-user-dialog/modify-user-dialog.component';
import { UserService, ICreateUserReq, IEditUserReq } from './../../../../@core/services/user.service';
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
      key: 'name',
      name: '姓名'
    },
    {
      key: 'account',
      name: '帳號'
    },
    {
      key: 'department',
      name: '科系'
    },
    {
      key: 'email',
      name: '信箱'
    }
  ];
  searchForm = new FormGroup({
    account: new FormControl(''),
    name: new FormControl(''),
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
      this.userList = res;
    });
  }

  openCreateUserDialog() {
    this.dialogService.open(ModifyUserDialogComponent).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.createUser(res);
    });
  }

  openEditUserDialog(account: string) {
    const dialogData = {
      context: { account }
    };
    this.dialogService.open(ModifyUserDialogComponent, dialogData).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.editUser(res);
    });
  }

  createUser(params: ICreateUserReq) {
    this.userService.createUser(params).subscribe(res => {
      const isSuccess = !res.msg;
      if (!isSuccess) {
        return alert('新增失敗');
      }
      alert('新增成功');
      this.getUserList();
    });
  }

  editUser(params: IEditUserReq) {
    this.userService.editUser(params).subscribe(res => {
      const isSuccess = !res.msg;
      if (!isSuccess) {
        return alert('編輯失敗');
      }
      alert('編輯成功');
      this.getUserList();
    });
  }

  deleteUser(id: number) {
    const isDelete = confirm('是刪除此使用者');
    if (!isDelete) {
      return;
    }
    this.userService.deleteUser({ id: id.toString() }).subscribe(res => {
      const isSuccess = !res.msg;
      if (!isSuccess) {
        return alert('刪除失敗');
      }
      alert('刪除成功');
      this.getUserList();
    });
  }
}
