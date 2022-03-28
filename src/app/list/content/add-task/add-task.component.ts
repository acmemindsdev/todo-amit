import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  taskData: string = '';
  addButton: number = 0;
  btnController: boolean = false;
  isEditEnable: boolean = false;
  addTaskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.validateForm();
    this.addTaskForm = new FormGroup({
      taskName: new FormControl(''),
    });
  }

  onClick() {
    if (this.addButton === 0) {
      this.addButton = 1;
    }
  }

  addTask(data: any) {
    if (data.length === 0) {
      console.log(data);
    }
  }

  onEdit() {
    this.isEditEnable = true;
  }

  validateForm() {
    this.addTaskForm = this.formBuilder.group({
      taskName: ['', [Validators.required, Validators.minLength(200)]]
    });
  }
}
