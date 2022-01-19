import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let sampleData = [
      'call someone','buy something','meet someone','study something'
    ];

    this.items = sampleData.map((data, index) => {
      return {id:index, name:data, completed:false}
    })

  }

  items:{id:number,name:string,completed: boolean}[] =[];



  toDoList:any[] = [];

  //add task
    addTask(item:string){

        console.warn(item);
        this.toDoList.push({id:this.toDoList.length, name:item});
        console.warn(this.toDoList);
    }
  // remove
    removeTask(id:number){

      console.warn(id);
      this.toDoList = this.toDoList.filter(item =>  {
        return item.id !== id
      });
    }

  //important List
    importantList:any;
    addTofavoritList(id:number){
      this.importantList = this.toDoList.filter(data => {
        return data.id == id;

      });

    }
}
