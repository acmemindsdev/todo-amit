import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  taskData: string = '';
  addButton: number = 0;
  btnController: boolean = false;
  isEditEnable : boolean = false

  constructor() { }

  onClick() {
    if(this.addButton === 0) {
      this.addButton = 1;
    }
  }

  addTask(data: any) {
    if(data.length === 0) {
      console.log(data);
    }
  }

  onEdit() {
    this.isEditEnable = true;
  }
}
