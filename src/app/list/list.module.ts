import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ContentComponent } from './content/content.component';
import { TaskComponent } from './content/task/task.component';
import { AllTaskListComponent } from './content/task/all-task-list/all-task-list.component';
import { AddTaskComponent } from './content/add-task/add-task.component';


@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TaskComponent,
    AllTaskListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatAutocompleteModule,
    NgbModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  ]
})
export class ListModule { }
