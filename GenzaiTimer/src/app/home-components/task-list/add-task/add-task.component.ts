import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmit(data: NgForm){
    this.ps.addTasks(data.value);
    data.resetForm;
  }

}
