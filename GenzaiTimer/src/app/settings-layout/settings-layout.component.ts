import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { SettingsModel } from './settings.model';
import { SettingsService } from './settings.service';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { getDatabase, ref, child, get } from 'firebase/database';

@Component({
  selector: 'app-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.css']
})
export class SettingsLayoutComponent {
  public work: any;
  public shortBreak: any;
  public longBreak: any;
  public interval: any;

  constructor(private ss: SettingsService, private db: AngularFireDatabase) 
  { 
    const auth = getAuth();
    const user = auth.currentUser;

    const dbRef = ref(getDatabase());

    if(user)
    {
      get(child(dbRef, "users/" + user.uid + "/settings/")).then((snapshot) => {
        if(snapshot.exists()) {
          console.log(snapshot.val());
          this.work = snapshot.child("work").val();
          this.shortBreak = snapshot.child("shortBreak").val();
          this.longBreak = snapshot.child("longBreak").val();
          this.interval = snapshot.child("interval").val();  
          
        } else {
          console.log("No data");
          this.work = 25;
          this.shortBreak = 5;
          this.longBreak = 15;
          this.interval = 4;
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }


  changeSettings(settings: SettingsModel)
  {
    console.log("You clicked change settings");
    console.log(settings);
    this.ss.changeSettings(settings);
  }

}
