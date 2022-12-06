import {CalenderCardModel} from "./calender-card.model";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class CalenderService{
     private baseUrl: string = "https://genzaitimer-debfe-default-rtdb.firebaseio.com/"
     private calenderEndPoint = "CalendarCard.json";

     constructor( private db: AngularFireDatabase){

     }

     getCalenders(){
        return this.db.list<CalenderCardModel>("CalendarCard").valueChanges();
     }
     getCalender(index:number){
        return this.db.list<CalenderCardModel>(this.baseUrl + this.calenderEndPoint + 'CalendarCard' + '/' + index + '.json');
     }
     addCalender(calender: CalenderCardModel){
        this.db.list<CalenderCardModel>("CalendarCard").push(calender);
     }
} 