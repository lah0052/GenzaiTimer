import { Component, Input, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
  @Input() email: any;

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

}
