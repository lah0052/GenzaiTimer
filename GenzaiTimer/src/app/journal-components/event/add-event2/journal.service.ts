import { JournalCardModel } from "./journal-card.model";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { getAuth, onAuthStateChanged } from "firebase/auth";


@Injectable(
    {providedIn: 'root'}
)
export class JournalService{
     private baseUrl: string = "https://genzaitimer-debfe-default-rtdb.firebaseio.com/"
     private calenderEndPoint = "journalEntries.json";

     constructor( private db: AngularFireDatabase){

     }

     getJournals(){
         const auth = getAuth();
         const user = auth.currentUser;

         if(user)
         {
            return this.db.list<JournalCardModel>("users/"+user.uid+"/journalEntries").valueChanges();
         }
         else
         {
            return this.db.list<JournalCardModel>("users/"+"0"+"/journalEntries").valueChanges();
         }   
     }

     getJournal(index:number){
         const auth = getAuth();
         const user = auth.currentUser;

         if(user)
         {
            return this.db.list<JournalCardModel>("users/" + user.uid + "/journalEntries/" + index);    
         }
         else
         {
            return this.db.list<JournalCardModel>("users/" + "0" + "/journalEntries/" + index);
         }
     }

     addJournal(journal: JournalCardModel){
         const auth = getAuth();
         const user = auth.currentUser;

         if(user)
         {
            this.db.list<JournalCardModel>("users/"+user.uid+"/journalEntries").push(journal);
         }
         else
         {
            this.db.list<JournalCardModel>("users/"+"0"+"/journalEntries").push(journal);
         }
     }


     removeJournal(journal: JournalCardModel){
      const auth = getAuth();
      const user = auth.currentUser;

      if(user)
      {
         this.db.database.ref("users/" + user.uid + "/journalEntries").remove();
      }
      else
      {
         this.db.database.ref("users/" + "0" + "/journalEntries").remove();
      }
      
     }



     
} 