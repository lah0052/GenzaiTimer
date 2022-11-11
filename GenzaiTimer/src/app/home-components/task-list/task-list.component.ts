import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() name: string;
  

  constructor() {
    this.name = "No Task"
   }

  ngOnInit(): void {
    
  }
}