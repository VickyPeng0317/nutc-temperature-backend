import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {
    this.http.post('https://dsl2501_70.nutc.edu.tw:5053/NutcTempApi/user/info', { userAccout: '1410532017'}).subscribe(res => console.log(res));
  }

  ngOnInit(): void {

  }


}
