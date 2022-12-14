import { Component, OnInit } from '@angular/core';
import {interval, Observable, TimeoutError} from "rxjs";
import {map, shareReplay} from "rxjs/operators"; 

@Component({
  selector: 'app-temp-timer',
  templateUrl: './temp-timer.component.html',
  styleUrls: ['./temp-timer.component.css'],
  
})

export class TempTimerComponent {
  secondsCountDown = 0; //incrememnts by 1000 every second (1000 miliseconds)
  thirtyMinutesInMiliseconds = 30*60*1000;
  fiveMinutesInMiliseconds = 5*60*1000;
  fiveteenMinutesInMiliseconds = 15*60*1000;
  isStopped:boolean = true;
  current_time = this.thirtyMinutesInMiliseconds;



  constructor() { 
   // this.timeLeft$ =
   this.timeLeft$ = interval(1000).pipe(
      map(x => this.calcDateDiff(this.current_time))
    );
    //timeLeft$: Observable<timeComponents>;
    
  }
  public timeLeft$: Observable<timeComponents>;

  startFunction() {
    this.isStopped = false;
  }

  calcDateDiff(time:number): 
  timeComponents {
  
   // let now = new Date()
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;
    //let startValue = 1000*60*30; //30 mins, 15 mins, or 5 mins
  
    let timeDifference =  time -this.secondsCountDown;
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