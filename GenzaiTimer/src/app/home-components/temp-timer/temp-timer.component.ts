import { Component, OnInit } from '@angular/core';
import {interval, Observable, TimeoutError} from "rxjs";
import {map, shareReplay} from "rxjs/operators"; 

let i = 0;

@Component({
  selector: 'app-temp-timer',
  templateUrl: './temp-timer.component.html',
  styleUrls: ['./temp-timer.component.css'],
})

export class TempTimerComponent {


  constructor() { 
    //let thirtyminsinmilisec = 1000*60*30;
    var current_time = 1000*60*30;

    this.timeLeft$ = interval(1000).pipe(
      map(x => calcDateDiff(current_time)),
        shareReplay(1)
    );
  }
 
  public timeLeft$: Observable<timeComponents>;
}

function calcDateDiff(time:number): 
timeComponents {
  i=i+1000;
 // let now = new Date()
  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;
  //let startValue = 1000*60*30; //30 mins, 15 mins, or 5 mins

  let timeDifference =  time -i;
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

