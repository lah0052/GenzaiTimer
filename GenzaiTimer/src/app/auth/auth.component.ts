import { NgForOf } from "@angular/common";
import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    public buttonClicked!:string;
    private authObservable!: Observable<AuthResponse>;

    constructor(private authService:AuthService, private db: AngularFireDatabase) {

    }

    public onSubmit(data: NgForm) {
        console.log("Button clicked = " + this.buttonClicked);
        console.log(data.value);
            

        if(this.buttonClicked == 'SignUp') {
            this.authObservable = this.authService.signup(data.value.email, data.value.password);

            this.authObservable.subscribe(
                (data:AuthResponse) => {
                    console.log(data);
                    if(this.buttonClicked == 'SignUp')
                    {
                        this.db.database.ref("users").child(data.localId).set("");
                        this.db.database.ref("users/"+data.localId).child("TaskList").set("");
                        this.db.database.ref("users/"+data.localId).child("eventEntries").set("");
                        this.db.database.ref("users/"+data.localId).child("journalEntries").set("");
                        this.db.database.ref("users/"+data.localId).child("settings").set("");
                        this.db.database.ref("users/"+data.localId+"/settings").child("work").set(25);
                        this.db.database.ref("users/"+data.localId+"/settings").child("shortBreak").set(5);
                        this.db.database.ref("users/"+data.localId+"/settings").child("longBreak").set(15);
                        this.db.database.ref("users/"+data.localId+"/settings").child("interval").set(4);                   
                    }
                },
                error => {
                    console.log(error.error.error.message);
                }
            );
        }

        if(this.buttonClicked == 'Login') {
            // this.authObservable = this.authService.login(data.value.email, data.value.password);
            const auth = getAuth();

            signInWithEmailAndPassword(auth, data.value.email, data.value.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);    
            })

            
        }

        
        data.resetForm();        
    }

}
