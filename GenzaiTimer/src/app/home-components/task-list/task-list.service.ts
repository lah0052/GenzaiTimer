import { Injectable } from "@angular/core";
import { TaskListModel } from "./task-list-model.model"
import {HttpClient} from "@angular/common/http"
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class TaskListService{
    private BaseUrl: string = "https://genzaitimer-debfe-default-rtdb.firebaseio.com/";
    private endPoint: string = "TaskList.json";
    
    constructor(private db:AngularFireDatabase){

    }

    getTaskList(){
        return this.db.list<TaskListModel>("TaskList").valueChanges();
    }

    addTasks(task: TaskListModel){
        this.db.list<TaskListModel>("TaskList").push(task);
    }
}