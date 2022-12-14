import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { Observable } from 'rxjs';
import { loginService } from './login.service';
import { loginResponse } from './loginResponse';
import { getAuth, signOut } from '@angular/fire/auth';
import { UserInforComponent } from '../user-infor/user-infor.component';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})

export class LoginLayoutComponent implements OnInit{

  public buttonClicked!:string;
    private loginObservable!: Observable<loginResponse>;

    constructor(private loginService:loginService) {
      
    }

    ngOnInit(): void {

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

    public signOut()
    {
        const auth = getAuth();
        
        signOut(auth).then(() => {
            console.log("User Signed Out.");
            location.reload();
        }).catch((error) => {
            console.log("User could not be signed out / No user signed in" + error);
    });
    }


 

  

}


