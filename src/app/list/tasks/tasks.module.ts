import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksRoutingModule } from './tasks-routing.module';
// import { SidebarComponent } from '../sidebar/sidebar.component';
// import { ContentComponent } from '../content/content.component';
// import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from './tasks.component';
// import { AddTaskComponent } from '../content/add-task/add-task.component';
// import { TaskComponent } from '../content/task/task.component';
// import { AllTaskListComponent } from '../content/task/all-task-list/all-task-list.component';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatListModule } from '@angular/material/list';
// import { MatDividerModule } from '@angular/material/divider';
// import { FormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TasksComponent,
    // HeaderComponent,
    // ContentComponent,
    // SidebarComponent,
    // AddTaskComponent,
    // TaskComponent,
    // AllTaskListComponent,
  ],
  imports: [
    // CommonModule,
    TasksRoutingModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatAutocompleteModule,
    // NgbModule,
    // MatGridListModule,
    // MatCardModule,
    // FormsModule,
    // MatDividerModule,
    // MatListModule,
    // MatExpansionModule,
    // MatCheckboxModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatIconModule,
  ],
  providers: [],
})
export class TasksModule {}
