import { Component, OnInit } from '@angular/core';
import { TaskType } from './TaskType ';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  taskName: TaskType[] = [];
  // completeList: TaskType[] = [];
  panelOpenState: boolean = true;
  completedData: any;

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

  pendingTasks(item: TaskType) {
    item.completed = true;
    console.log(item);
  }

  completedTask(item: TaskType) {
    item.completed = false;
  }
}
