import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import {MatSliderModule} from '@angular/material/slider'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatDialogModule } from "@angular/material/dialog";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from './pages/tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
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
    // MatDialogRef,



  ],
  exports:[

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
