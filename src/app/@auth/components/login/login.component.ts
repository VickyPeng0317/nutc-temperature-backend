import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '@core/services/store.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    userAccount: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    const params = this.form.getRawValue();
    this.userService.login(params).subscribe(res => {
      const { isSuccess, data } = res;
      if (!isSuccess) {
        alert('帳號或密碼錯誤');
        return;
      }
      this.storeService.setUserInfo(data);
      this.router.navigate(['front']);
    });
  }

}
