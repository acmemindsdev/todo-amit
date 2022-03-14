import { TaskType } from 'src/app/list/interface/TaskType ';
import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-all-task-list',
  templateUrl: './all-task-list.component.html',
  styleUrls: ['./all-task-list.component.scss']
})
export class AllTaskListComponent implements OnInit {
  @Input() listData: TaskType[] = [];
  @Input() listType: any;
  @Output() checkBoxToggle:EventEmitter<any>= new EventEmitter();
  checkBoxColor: ThemePalette = 'primary';
  filteredData: TaskType[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updateFilterData();
  }

  updateFilterData() {
    if (this.listType == 'completed') {
      this.filteredData = this.listData.filter(data => data.completed);
    } else if (this.listType == 'pending') {
      this.filteredData = this.listData.filter(data => !data.completed);
    }
  }

  showDataOnList(data: { id:number, name:string, completed:boolean }) {
    this.checkBoxToggle.emit(data);
  }
}
