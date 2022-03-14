import { AllTaskListComponent } from './all-task-list/all-task-list.component';
import { TaskType } from '../../interface/TaskType ';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, Data, NavigationEnd, Router } from '@angular/router';

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
      // console.log(router)
      this.router.events.subscribe((val) => {
        // console.log("here" +location.pathname);
        this.url = location.pathname;

      })

  }

  ngOnInit(): void {
    console.log("ngOnInit" , this.url)
    if(this.url === "/list/tasklist1") {
      this.taskList = [
        'call someone',
        'buy something',
        'meet someone',
        'study something',
      ];
    }
    if(this.url === "/list/tasklist2") {
      this.taskList = [
        'First Task',
        'Second Task',
        'Third Task',
        'Four Task',
      ];
    }
    this.taskName = this.taskList.map((data, index) => {
      return { id: index, name: data, completed: false };
    });
  }
  receivedFromRout: any;
  url: any;
  taskList  = [''];

  updateTasks(item: TaskType, type: string) {
    item.completed = type === 'pending';
    this.completeList.updateFilterData();
    this.pendingList.updateFilterData();
  }
}
