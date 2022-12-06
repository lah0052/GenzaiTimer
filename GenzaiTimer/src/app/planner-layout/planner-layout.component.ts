import { Component, OnInit } from '@angular/core';
import { CalenderCardModel } from '../planner-components/calender-card.model';
import { CalenderService } from '../planner-components/calender.service';

@Component({
  selector: 'app-planner-layout',
  templateUrl: './planner-layout.component.html',
  styleUrls: ['./planner-layout.component.css']
})
export class PlannerLayoutComponent implements OnInit {

  calenders: CalenderCardModel [] = [];

  constructor(private calenderService:CalenderService) { }

  ngOnInit(): void {
    this.calenderService.getCalenders().subscribe((data: CalenderCardModel []) => {
      console.log("Fetching Events");
      for (var calender of data){
        console.log(calender);
        this.calenders.push(calender);
      }  
    });
  }

}
