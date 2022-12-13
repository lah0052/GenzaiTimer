import {CalenderCardModel} from "./calender-card.model";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { getAuth, onAuthStateChanged } from "firebase/auth";
@Injectable(
    {providedIn: 'root'}
)
export class CalenderService{
     private baseUrl: string = "https://genzaitimer-debfe-default-rtdb.firebaseio.com/"
     private calenderEndPoint = "eventEntries.json";

     constructor( private db: AngularFireDatabase){

     }

     getCalenders(){
         const auth = getAuth();
         const user = auth.currentUser;

         if(user)
         {
            return this.db.list<CalenderCardModel>("users/"+user.uid+"/eventEntries").valueChanges();
         }
         else
         {
            return this.db.list<CalenderCardModel>("users/"+"0"+"/eventEntries").valueChanges();
         }   
     }

     getCalender(index:number){
         const auth = getAuth();
         const user = auth.currentUser;

         if(user)
         {
            return this.db.list<CalenderCardModel>("users/" + user.uid + "/eventEntries/" + index);    
         }
         else
         {
            return this.db.list<CalenderCardModel>("users/" + "0" + "/eventEntries/" + index);
         }
     }

     addCalender(calender: CalenderCardModel){
         const auth = getAuth();
         const user = auth.currentUser;

         if(user)
         {
            this.db.list<CalenderCardModel>("users/"+user.uid+"/eventEntries").push(calender);
         }
         else
         {
            this.db.list<CalenderCardModel>("users/"+"0"+"/eventEntries").push(calender);
         }
     }
     
} 