import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'front-header',
  templateUrl: './front-header.component.html',
  styleUrls: ['./front-header.component.scss']
})
export class FrontHeaderComponent implements OnInit {
  constructor(
    private sidebarService: NbSidebarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true, 'menu');
  }

  logout() {
    this.router.navigate(['login']);
  }
}
