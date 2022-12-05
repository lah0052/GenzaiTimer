import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  public onSubmit(data: NgForm) {
    console.log("Button Clicked");
    console.log(data.value);

  }


  constructor() { }

  ngOnInit(): void {
  }

}
