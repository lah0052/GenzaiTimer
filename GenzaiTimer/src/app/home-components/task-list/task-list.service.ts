import { Injectable} from "@angular/core";
import { TaskListModel } from "./task-list-model.model"
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getAuth } from "firebase/auth";
import { Router} from '@angular/router';


@Injectable(
    {providedIn: 'root'}
)

export class TaskListService{
    private defaultUser: string = "0";
    public auth = getAuth();
    public user = this.auth.currentUser;
    
    constructor(private db:AngularFireDatabase, private router:Router){
        
    }

    getTaskList(){
        this.auth = getAuth();
        this.user = this.auth.currentUser;

        if(this.user)
        {
            return this.db.list<TaskListModel>("users/" + this.user.uid + "/TaskList").valueChanges();
        }
        else
        {
            return this.db.list<TaskListModel>("users/" + this.defaultUser + "/TaskList").valueChanges();
        }
    }

    addTasks(task: TaskListModel | {name: ''}){
        this.auth = getAuth();
        this.user = this.auth.currentUser;
        
        if(task.name.length == 0){
            return;
        }

        if(this.user)
        {
            this.db.list<TaskListModel>("users/" + this.user.uid + "/TaskList").push(task);
        }
        else
        {
            this.db.list<TaskListModel>("users/" + this.defaultUser + "/TaskList").push(task);
        }     
        
        this.router.navigateByUrl('/settings', {skipLocationChange: true}).then(() =>{
            this.router.navigate(['/home']);
        });
    }
}