import { Component, Input, OnInit } from '@angular/core';
import {TaskListService} from './task-list-service'
import { TaskListModel } from './task-list-model.model';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() TaskName: string;
  tasks: TaskListModel[] = []

  constructor(private TaskListService: TaskListService) {
    this.TaskName = "No Task"
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