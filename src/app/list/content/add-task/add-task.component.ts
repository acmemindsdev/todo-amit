import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  addButton: number = 0;

  constructor() { }

  onClick() {
    this.addButton = 1;
  }

}
