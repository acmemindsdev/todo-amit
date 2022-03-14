import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
  ]
})
export class ListModule { }
