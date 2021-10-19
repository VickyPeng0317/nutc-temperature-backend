import { UserService } from './../../../../@core/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'modify-user-dialog',
  templateUrl: './modify-user-dialog.component.html',
  styleUrls: ['./modify-user-dialog.component.scss']
})
export class ModifyUserDialogComponent implements OnInit {
  @Input()
  account: string;
  isEdit: boolean;
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    email: new FormControl(''),
  });
  constructor(
    protected dialogRef: NbDialogRef<ModifyUserDialogComponent>,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isEdit = !!this.account;
    if (!this.isEdit) {
      return;
    }
    this.setEditForm(this.account);
  }

  setEditForm(userAccount: string) {
    this.userService.getUserInfo({ userAccount }).subscribe(res => {
      const isSuccess = !!res;
      if (!isSuccess) {
        return;
      }
      const userInfo = res;
      this.form.patchValue(userInfo);
    });
  }

  send() {
    const res = {
      ...this.form.getRawValue()
    };
    this.dialogRef.close(res);
  }

  close() {
    this.dialogRef.close();
  }

}
