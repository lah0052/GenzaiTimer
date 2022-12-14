import { Component, Input, OnInit } from '@angular/core';
import { getAuth, signOut } from 'firebase/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})

export class UserInforComponent implements OnInit {
  @Input() email: any;
  public buttonClicked!:string;

  constructor() { 
    const auth = getAuth();
    const user = auth.currentUser;
    
    if(user)
    {
        this.email = user.email;
    }
    else
    {
        this.email = "Guest";
    }
  }
  ngOnInit(): void {

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
