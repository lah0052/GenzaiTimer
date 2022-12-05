import { Component, OnInit } from '@angular/core';
import { TaskListModel } from '../task-list-model.model';
import { TaskListService } from '../task-list.service';


@Component({
  selector: 'fm-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private ps:TaskListService) { }

  ngOnInit(): void {
  }

  addTask(task: TaskListModel){
    console.log("button clicked");
    console.log(task);
    this.ps.addTasks(task);
  }

}
