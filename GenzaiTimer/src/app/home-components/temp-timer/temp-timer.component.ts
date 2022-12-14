import { Component, OnInit } from '@angular/core';
import {interval, Observable, TimeoutError} from "rxjs";
import {map, shareReplay} from "rxjs/operators"; 

@Component({
  selector: 'app-temp-timer',
  templateUrl: './temp-timer.component.html',
  styleUrls: ['./temp-timer.component.css'],
  
})

export class TempTimerComponent {
  //global vars for my functions
  secondsCountDown = 0; //incrememnts by 1000 every second (1000 miliseconds)
  thirtyMinutesInMiliseconds = 30*60*1000; //30 mins ms
  fiveMinutesInMiliseconds = 5*60*1000;   //5 mins ms
  fiveteenMinutesInMiliseconds = 15*60*1000; //15 mins ms
  isStopped:boolean = true; //is the timer stopped? var used for pausing
  current_time = this.thirtyMinutesInMiliseconds; //timer will start on 30, this var gets updated.



  constructor() { 
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
    if(timeDifference < 0) { //we dont want negative numbers on our timer. 
      timeDifference = 0;
      this.isStopped = true;
    }
  
    const daysToDday = Math.floor(
      timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );
  
    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
        hoursInADay
    );
  
    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
        secondsInAMinute
    );
  
    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;
  
  
    if (this.isStopped == false) {
      this.secondsCountDown=this.secondsCountDown+1000;
    }
    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }
  



}
interface timeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  daysToDday: number;
}


/* function calcDateDiff(time:number): 
timeComponents {

 // let now = new Date()
  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;
  //let startValue = 1000*60*30; //30 mins, 15 mins, or 5 mins

  let timeDifference =  time -secondsCountDown;
  if(timeDifference < 0)
    timeDifference = 0 

  const daysToDday = Math.floor(
    timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
  );

  const hoursToDday = Math.floor(
    (timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
  );

  const minutesToDday = Math.floor(
    (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
  );

  const secondsToDday =
    Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;


  if (isStopped) {
    secondsCountDown=secondsCountDown+1000;
  }
  return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
}

interface timeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  daysToDday: number;
}
*/