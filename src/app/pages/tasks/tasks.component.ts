import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskType } from './TaskType ';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],

})
export class TasksComponent implements OnInit {
  @ViewChild('pendingList', { static: false }) pendingList!: TaskListComponent;
  @ViewChild('completeList', { static: false })completeList!: TaskListComponent;
  taskName: TaskType[] = [];
  panelOpenState: boolean = true;
  completedData: any;
  checkBoxFlag: boolean = true;

  constructor() {}

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
