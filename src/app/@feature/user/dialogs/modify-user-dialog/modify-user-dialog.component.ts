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
  id: number;
  isEdit: boolean;
  form = new FormGroup({
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
    this.isEdit = !!this.id;
    if (!this.isEdit) {
      return;
    }
    this.setEditForm(this.id);
  }

  setEditForm(id: number) {
    this.userService.getUserInfo({ id }).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return;
      }
      const userInfo = res.data;
      this.form.patchValue(userInfo);
    });
  }

  send() {
    const res = {
      id: this.id,
      ...this.form.getRawValue()
    };
    this.dialogRef.close(res);
  }

  close() {
    this.dialogRef.close();
  }

}
