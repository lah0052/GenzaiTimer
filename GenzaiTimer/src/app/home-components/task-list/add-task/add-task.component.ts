import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { getAuth } from 'firebase/auth';
import { TaskListModel } from '../task-list-model.model';
import { TaskListService } from '../task-list.service';


@Component({
  selector: 'fm-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  buttonClicked!: string;

  constructor(private ps:TaskListService, private db:AngularFireDatabase) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm){
    const auth = getAuth();
    const user = auth.currentUser;

    if(this.buttonClicked == 'AddTask'){
      console.log("add");
      this.ps.addTasks(data.value);
      data.resetForm;
    }
    else if(this.buttonClicked == 'ClearTasks'){
      console.log("clear");
      if(user){
        this.db.database.ref("users/" + user.uid + "/TaskList").remove();
        location.reload();
      }
      else{
        this.db.database.ref("users/0/TaskList").remove();
        location.reload();
      }
    }
  }

}
