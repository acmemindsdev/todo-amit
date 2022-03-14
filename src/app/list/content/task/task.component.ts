import { AllTaskListComponent } from './all-task-list/all-task-list.component';
import { TaskType } from '../../interface/TaskType ';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
      this.router.events.subscribe((val) => {
        this.routUrl = location.pathname;
      })
  }

  ngOnInit(): void {

    if(this.routUrl === "/list/tasklist1") {
      this.listData = [
        'Go on side',
        'Work something',
        'Create new',
        'Study hard'
       ];
    }
    if(this.routUrl === "/list/tasklist2") {
      this.listData = [
        'First Task',
        'Second Task',
        'Third Task',
        'Four Task'
       ];
    }
    this.taskName = this.listData.map((data, index) => {
      return { id: index, name: data, completed: false };
    });
  }
  receivedFromRout: any;
  routUrl: any;
  listData  = [''];

  updateTasks(item: TaskType, type: string) {
    item.completed = type === 'pending';
    this.completeList.updateFilterData();
    this.pendingList.updateFilterData();
  }
}

