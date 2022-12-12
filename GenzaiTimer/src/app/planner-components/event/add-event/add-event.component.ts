import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalenderCardModel } from '../../calender-card.model';
import { CalenderService } from '../../calender.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private ps:CalenderService, private router:Router) { }

  ngOnInit(): void {
  }

  addCalender(calender:CalenderCardModel){
    this.ps.addCalender(calender);
    this.router.navigate(['/planner']);
  }
  removeCalender(calender: CalenderCardModel){
   

  }
}
