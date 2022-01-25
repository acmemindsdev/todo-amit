import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() listData: { id:number, name:string, completed:boolean }[] = [] ;
  @Output() checkBoxToggle:EventEmitter<any>= new EventEmitter();
  checkBoxColor = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  showDataOnList(data:{ id:number, name:string, completed:boolean }){
    this.checkBoxToggle.emit(data);
    console.log(data);
  }

  showCompleteData(data2: {id:number, name:string, completed:boolean }){
    this.checkBoxToggle.emit(data2)
  }
}
