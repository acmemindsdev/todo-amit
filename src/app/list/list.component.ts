import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  openSidenav: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  sideNaveController() {
    if (this.openSidenav) {
      this.openSidenav = false;
    } else {
      this.openSidenav = true
    }
  }
}
