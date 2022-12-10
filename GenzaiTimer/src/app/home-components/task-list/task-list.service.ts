import { Injectable } from "@angular/core";
import { TaskListModel } from "./task-list-model.model"
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class TaskListService{
    private user: string = "0";
    
    constructor(private db:AngularFireDatabase){

    }

    getTaskList(){
        return this.db.list<TaskListModel>("users/" + this.user + "/TaskList").valueChanges();
    }

    addTasks(task: TaskListModel){
        if(task.name.length == 0){
            return;
        }
        
        this.db.list<TaskListModel>("users/" + this.user + "/TaskList").push(task);
        location.reload();
    }
}