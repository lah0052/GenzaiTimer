import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { Observable } from 'rxjs';
import { loginService } from './login.service';
import { loginResponse } from './loginResponse';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent {

  public buttonClicked!:string;
    private loginObservable!: Observable<loginResponse>;

    constructor(private loginService:loginService) {

    }

    public onSubmit(data: NgForm) {
        console.log("Button clicked = " + this.buttonClicked);
        console.log(data.value);

        if(this.buttonClicked == 'SignUp') {
            this.loginObservable = this.loginService.signup(data.value.email, data.value.password);
        }

        if(this.buttonClicked == 'Login') {
            this.loginObservable = this.loginService.login(data.value.email, data.value.password);
        }

        this.loginObservable.subscribe(
            (data:loginResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error);
            }
        );
        data.resetForm();

    }


 

  

}
