import { Injectable } from "@angular/core";
import { TaskListModel } from "./task-list-model.model"
import {HttpClient} from "@angular/common/http"

@Injectable(
    {providedIn: 'root'}
)

export class TaskListService{
    private BaseUrl: string = "https://genzaitimer-debfe-default-rtdb.firebaseio.com/";
    private endPoint: string = "TaskList.json";
    
    constructor(private http: HttpClient){

    }

    getTaskList(){
        return this.http.get<TaskListModel []>(this.BaseUrl + this.endPoint);
    }

    getOneTask(index: number){
        return this.http.get<TaskListModel>(this.BaseUrl + "TaskList" + '/' + index + ".json");
    }
}