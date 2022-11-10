import { Component, OnInit } from '@angular/core';
import { TaskListModel } from '../home-components/task-list/task-list-model.model';
import {TaskListService} from '../home-components/task-list/task-list.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  tasks: TaskListModel[] = []

  constructor(private TaskListService: TaskListService){

  }

  ngOnInit(): void {
    this.TaskListService.getTaskList().subscribe((data: TaskListModel[]) => {
      for(var x of data){
        this.tasks.push(x)
        console.log(x)
      }
    });
  }

}
