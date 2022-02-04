import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { TasksComponent } from './pages/tasks/tasks.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ContentComponent } from './pages/content/content.component';
import { AddTaskComponent } from './pages/content/add-task/add-task.component';
import { TaskComponent } from './pages/content/task/task.component';
import { AllTaskListComponent } from './pages/content/task/all-task-list/all-task-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    AddTaskComponent,
    TaskComponent,
    AllTaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatDialogModule,
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
    MatIconModule

  ],
  exports: [MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
