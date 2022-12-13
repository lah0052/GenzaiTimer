import { Injectable } from "@angular/core";
import { TaskListModel } from "./task-list-model.model"
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getAuth } from "firebase/auth";

@Injectable(
    {providedIn: 'root'}
)

export class TaskListService{
    private user: string = "0";
    
    constructor(private db:AngularFireDatabase){

    }

    getTaskList(){
        const auth = getAuth();
        const user = auth.currentUser;

        if(user)
        {
            return this.db.list<TaskListModel>("users/" + user.uid + "/TaskList").valueChanges();
        }
        else
        {
            return this.db.list<TaskListModel>("users/" + this.user + "/TaskList").valueChanges();
        }
    }

    addTasks(task: TaskListModel){
        const auth = getAuth();
        const user = auth.currentUser;
        
        if(task.name.length == 0){
            return;
        }

        if(user)
        {
            this.db.list<TaskListModel>("users/" + user.uid + "/TaskList").push(task);
        }
        else
        {
            this.db.list<TaskListModel>("users/" + this.user + "/TaskList").push(task);
        }     
        
        location.reload();
    }
}