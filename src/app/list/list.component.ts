import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent {
  openSidenav: boolean = true;

  constructor() {}

  sideNaveController() {
    this.openSidenav = !this.openSidenav;
  }
}
