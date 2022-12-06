import { Component, OnInit } from '@angular/core';
import {interval, Observable, TimeoutError} from "rxjs";
import {map, shareReplay} from "rxjs/operators";  

@Component({
  selector: 'app-temp-timer',
  templateUrl: './temp-timer.component.html',
  styleUrls: ['./temp-timer.component.css']
})


export class TempTimerComponent {

  constructor() { 
    let current_time = Date.now()
    this.timeLeft$ = interval(1000).pipe(
      map(x => calcDateDiff(current_time)),
        shareReplay(1)
    );
  }
 
  public timeLeft$: Observable<timeComponents>;
}

function calcDateDiff(time: number): 
timeComponents {

  let now = new Date()
  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;

  let timeDifference =  time - Date.now()+1000*60*30
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

  return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
}

interface timeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  daysToDday: number;
}

