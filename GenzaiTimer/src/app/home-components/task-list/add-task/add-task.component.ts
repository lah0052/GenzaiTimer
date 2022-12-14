import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private ps:TaskListService, private db:AngularFireDatabase, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm){
    const auth = getAuth();
    const user = auth.currentUser;

    if(this.buttonClicked == 'AddTask'){
      this.ps.addTasks(data.value);
      data.resetForm;
    }
    else if(this.buttonClicked == 'ClearTasks'){
      if(user){
        this.db.database.ref("users/" + user.uid + "/TaskList").remove();
        
        this.router.navigateByUrl('/settings', {skipLocationChange: true}).then(() =>{
            this.router.navigate(['/home']);
          });
      }
      else{
        this.db.database.ref("users/0/TaskList").remove();

        this.router.navigateByUrl('/settings', {skipLocationChange: true}).then(() =>{
          this.router.navigate(['/home']);
        });
      }
    }
  }

}
