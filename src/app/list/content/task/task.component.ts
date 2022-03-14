import { AllTaskListComponent } from './all-task-list/all-task-list.component';
import { TaskType } from '../../interface/TaskType ';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @ViewChild('pendingList', { static: false }) pendingList!: AllTaskListComponent;
  @ViewChild('completeList', { static: false })completeList!: AllTaskListComponent;
  taskName: TaskType[] = [];
  panelOpenState: boolean = true;
  completedData: any;
  checkBoxFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
    let sampleData = [
      'call someone',
      'buy something',
      'meet someone',
      'study something',
    ];

    this.taskName = sampleData.map((data, index) => {
      return { id: index, name: data, completed: false };
    });
    console.log(this.taskName);
  }

  updateTasks(item: TaskType, type: string) {
    item.completed = type === 'pending';
    this.completeList.updateFilterData();
    this.pendingList.updateFilterData();
  }
}
