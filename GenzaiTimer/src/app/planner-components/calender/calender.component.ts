import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalenderService } from 'src/app/planner-components/calender.service';
import { CalenderCardModel } from '../calender-card.model';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  @Input() date: string;
  @Input() title: string;
  @Input() description: string;
  @Input() time: string;

  constructor(private ps:CalenderService, private router:Router) {
    this.date = "no date given or loading error";
    this.title = "no title given or loading error";
    this.description = "no description given or loading error";
    this.time = "no time given or loading error";
   }

   

  ngOnInit(): void {
  }

  removeCalender(calender:CalenderCardModel){
    this.ps.removeCalender(calender);
    location.reload();
  }

}
