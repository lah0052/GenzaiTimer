import { Component,Input, OnInit } from '@angular/core';

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

  constructor() {
    this.date = "no date given or loading error";
    this.title = "no title given or loading error";
    this.description = "no description given or loading error";
    this.time = "no time given or loading error";
   }

  ngOnInit(): void {
  }

}
