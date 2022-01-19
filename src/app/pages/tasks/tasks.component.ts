import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
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

}
