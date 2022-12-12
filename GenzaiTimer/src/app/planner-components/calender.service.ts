import {CalenderCardModel} from "./calender-card.model";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class CalenderService{
     private baseUrl: string = "https://genzaitimer-debfe-default-rtdb.firebaseio.com/"
     private calenderEndPoint = "eventEntries.json";

     constructor( private db: AngularFireDatabase){

     }

     getCalenders(){
        return this.db.list<CalenderCardModel>("users/"+"0"+"/eventEntries").valueChanges();
     }
     getCalender(index:number){
        return this.db.list<CalenderCardModel>(this.baseUrl + this.calenderEndPoint + 'eventEntries' + '/' + index + '.json');
     }
     addCalender(calender: CalenderCardModel){
        this.db.list<CalenderCardModel>("users/"+"0"+"/eventEntries").push(calender);
     }
     
} 