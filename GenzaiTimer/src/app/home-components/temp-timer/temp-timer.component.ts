import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, child, get } from 'firebase/database';
import {interval, Observable, TimeoutError} from "rxjs";
import {map, shareReplay} from "rxjs/operators"; 


var global_current_time = 30*60*1000; //start timer at 30
var global_isStopped = true;
var global_secondsCountDown = 0;

@Component({
  selector: 'app-temp-timer',
  templateUrl: './temp-timer.component.html',
  styleUrls: ['./temp-timer.component.css'],
  
})

export class TempTimerComponent {
  //global vars for my functions
  work = 25;
  shortBreak = 5;
  longBreak = 15;
  secondsCountDown = global_secondsCountDown; //incrememnts by 1000 every second (1000 miliseconds)
  thirtyMinutesInMiliseconds = this.work*60*1000; //30 mins ms
  fiveMinutesInMiliseconds = this.shortBreak*60*1000;   //5 mins ms
  fiveteenMinutesInMiliseconds = this.longBreak*60*1000; //15 mins ms
  isStopped = global_isStopped; //is the timer stopped? var used for pausing
  current_time = global_current_time; //timer will start on 30, this var gets updated.

  constructor() { 
   
    
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
          this.thirtyMinutesInMiliseconds = this.work*60*1000; //30 mins ms
          this.fiveMinutesInMiliseconds = this.shortBreak*60*1000;   //5 mins ms
          this.fiveteenMinutesInMiliseconds = this.longBreak*60*1000; //15 mins ms
          this.current_time = this.thirtyMinutesInMiliseconds;
        } else {
          this.thirtyMinutesInMiliseconds = 25*60*1000; //30 mins ms
          this.fiveMinutesInMiliseconds = 5*60*1000;   //5 mins ms
          this.fiveteenMinutesInMiliseconds = 15*60*1000;
          this.current_time = this.thirtyMinutesInMiliseconds;
          
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    else{
      this.thirtyMinutesInMiliseconds = 25*60*1000; //30 mins ms
      this.fiveMinutesInMiliseconds = 5*60*1000;   //5 mins ms
      this.fiveteenMinutesInMiliseconds = 15*60*1000;
      this.current_time = this.thirtyMinutesInMiliseconds;
  
    }

    this.timeLeft = interval(1000).pipe(     //interval is a function that infinitely runs once every second when passed the parameter 1000.
      map(x => this.calcDateDiff(this.current_time)) //the map is used to constantly run the function with interval.
    );
  }

  public timeLeft: Observable<timeComponents>; //an observable is a subscribe/publish-esque data type. used for updating
  //in the html, one of the data types is a timeLeft

  startFunction() {
    this.isStopped = false; //if timer is started, isStopped is false.
  }

  stopFunction() {
    this.isStopped = true;
  }

  resetFunction() {
    this.secondsCountDown = 0;
  }

  thirtyMinWorkFunction() {
    this.current_time = this.thirtyMinutesInMiliseconds;
    this.isStopped = false;
    this.secondsCountDown=0;
  }

  shortBreakFunction() {
    this.current_time = this.fiveMinutesInMiliseconds
    this.isStopped = false;
    this.secondsCountDown=0;
  }

  longBreakFunction() {
    this.current_time = this.fiveteenMinutesInMiliseconds;
    this.isStopped = false;
    this.secondsCountDown=0;
  }

  calcDateDiff(time:number):  //function that calculates the new timeComponents. Within this function, secondsCountDown gets iterated.
                              //the parameter passed by the function call in the constructor is going to be the time limit for this period. eg, 30 mins, 5 mins, etc.
  timeComponents {
    const milliSecondsInASecond = 1000; //convenience vars; no magic numbers
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
  
    let timeDifference =  time - this.secondsCountDown; //time difference will represent what time is left on the clock.
    if(timeDifference <= 0) { //we dont want negative numbers on our timer. 
      timeDifference = 0;
    }
  
    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
        secondsInAMinute
    );
  
    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;
  
  

    if (this.isStopped == false) {
      this.secondsCountDown=this.secondsCountDown+1000;
    }

    global_current_time = this.current_time;
    global_isStopped = this.isStopped;
    global_secondsCountDown = this.secondsCountDown;



    return { secondsToDday, minutesToDday };
  }
  
}
interface timeComponents {
  secondsToDday: number;
  minutesToDday: number;
}