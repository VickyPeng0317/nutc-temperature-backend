import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '@core/services/store.service';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'front-header',
  templateUrl: './front-header.component.html',
  styleUrls: ['./front-header.component.scss']
})
export class FrontHeaderComponent implements OnInit {
  constructor(
    private sidebarService: NbSidebarService,
    private router: Router,
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true, 'menu');
  }

  logout() {
    this.storeService.removeUserInfo();
    this.router.navigate(['login']);
  }
}
