import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskName: { id:number, name:string, completed:boolean }[] = [];
  checkBoxColor = 'primary';
  completeList: { id:number, name:string, completed:boolean }[] = [];

  constructor() { }

  ngOnInit(): void {

    let sampleData = [
      'call someone','buy something','meet someone','study something'
    ];

    this.taskName = sampleData.map((data, index) => {
      return { id:index, name:data, completed:false }
    })
  }

  completeTask(item: { id:number, name:string, completed:boolean }) {
    this.removeFromTaskList(item);
    this.addToCompleteTaskList(item);
  }

  removeFromTaskList(selectedIndex: { id:number, name:string, completed:boolean }) {
    this.taskName = this.taskName.filter(item => item.id !== selectedIndex.id);
  }

  addToCompleteTaskList(selectedIndex: { id:number, name:string, completed:boolean }) {
    this.completeList.push(selectedIndex);
  }

  addInTaskLIst(item: { id:number, name:string, completed:boolean}) {
    this.taskName.push(item);
  }

  removeFromCompleteList(item: { id:number, name:string, completed:boolean}) {
    this.completeList = this.completeList.filter(data => data.id !== item.id);
  }

  revertToTaskList(item: { id:number, name:string, completed:boolean }) {
    this.addInTaskLIst(item);
    this.removeFromCompleteList(item);
  }

}
