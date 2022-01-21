import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';


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

    // ############################################################






}
