import { Component, OnInit } from '@angular/core';
import {interval, Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";  

@Component({
  selector: 'app-temp-timer',
  templateUrl: './temp-timer.component.html',
  styleUrls: ['./temp-timer.component.css']
})


export class TempTimerComponent {

  constructor() { 
    this.timeLeft$ = interval(1000).pipe(
      map(x => calcDateDiff()),
        shareReplay(1)
    );
  }
 
  public timeLeft$: Observable<timeComponents>;
}

function calcDateDiff(endDay: Date = new Date(2022, 20, 1)): 
timeComponents {

  const dDay = endDay.valueOf();

  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;

  const timeDifference = dDay - Date.now();

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

