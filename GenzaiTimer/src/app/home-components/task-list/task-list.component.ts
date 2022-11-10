import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() TaskName: string;
  

  constructor() {
    this.TaskName = "No Task"
   }

  ngOnInit(): void {
    
  }
}