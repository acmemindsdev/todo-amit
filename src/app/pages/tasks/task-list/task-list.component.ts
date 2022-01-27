import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {TaskType} from '../TaskType ';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  private _listData: { id:number, name:string, completed:boolean }[] = [];
  @Input() set listData(value: TaskType[]) {
    this._listData = value;
    this.updateFilterData();
    console.log('inside Seter')
  }
  get listData() {
    return this._listData;
  }
  @Input() listType: any;
  @Output() checkBoxToggle:EventEmitter<any>= new EventEmitter();
  checkBoxColor = 'primary';
  filteredData: TaskType[] = [];
  checkBoxFlag: any;
  checked:boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.updateFilterData();
  }

  updateFilterData(){
    if (this.listType == 'completed') {
      this.filteredData = this._listData.filter(data => data.completed === true);
    } else if (this.listType == 'pending') {
      this.filteredData = this._listData.filter(data => data.completed === false);
    }
    console.log(this._listData);
  }

  showDataOnList(data: { id:number, name:string, completed:boolean }) {
    this.checkBoxToggle.emit(data);
  }

  // showCompleteData(data2: {id:number, name:string, completed:boolean }) {
  //   this.checkBoxToggle.emit(data2);

  // }
}
