import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  @Input() name: string;
  

  constructor(private ps:TaskListService) {
    this.name = "No Task"
   }

  onRemove(data: NgForm){
    this.ps.addTasks(data.value);
    data.resetForm;
    console.log(data.value);
  }
}