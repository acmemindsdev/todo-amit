import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskName: { id:number, name:string, completed:boolean }[] = [] ;
  @Input() completeList: { id:number, name:string, completed:boolean }[] = [] ;
  @Output() completeTask:EventEmitter<any>= new EventEmitter();
  @Output() revertToTaskList:EventEmitter<any> =new EventEmitter();
  checkBoxColor = 'primary';
  checkBoxFlag = true;

  constructor() { }

  ngOnInit(): void {
  }

  showDataOnList(listOfTask: { id:number, name:string, completed:boolean }) {
    this.completeTask.emit(listOfTask);
  }

  showCompleteData(data2: { id:number, name:string, completed:boolean } ) {
    this.revertToTaskList.emit(data2)
  }
}
