import { Component, OnInit } from '@angular/core';
import { TaskType } from './TaskType ';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskName: TaskType[] = [];
  completeList: TaskType[] = [];
  panelOpenState:boolean =  true;

  constructor() { }

  ngOnInit(): void {

    let sampleData = [
      'call someone','buy something','meet someone','study something'
    ];

    this.taskName = sampleData.map((data, index) => {
      return { id:index, name:data, completed:false }
    })
  }

  completeTask(item: TaskType) {
    this.removeFromTaskList(item);
    this.addToCompleteTaskList(item);
  }

  removeFromTaskList(selectedIndex: TaskType) {
    this.taskName = this.taskName.filter(item => item.id !== selectedIndex.id);
  }

  addToCompleteTaskList(selectedIndex: TaskType) {
    this.completeList.push(selectedIndex);
  }

  addInTaskLIst(item: TaskType) {
    this.taskName.push(item);
  }

  removeFromCompleteList(item: TaskType) {
    this.completeList = this.completeList.filter(data => data.id !== item.id);
  }

  revertToTaskList(item: TaskType) {
    this.addInTaskLIst(item);
    this.removeFromCompleteList(item);
  }
}
