import { Injectable } from "@angular/core";
import { SettingsModel } from "./settings.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable(
    {providedIn: 'root'}
)

export class SettingsService
{
    
    constructor(private db: AngularFireDatabase) {

    }

    getSettings()
    {
        
    }

    changeSettings(settings: SettingsModel)
    {
        const auth = getAuth();
        const user = auth.currentUser;

        if(user)
        {
                const uid = user.uid;
                this.db.database.ref("users/" + uid + "/settings/work").set(settings.work);
                this.db.database.ref("users/" + uid + "/settings/interval").set(settings.interval);
                this.db.database.ref("users/" + uid + "/settings/shortBreak").set(settings.shortBreak);
                this.db.database.ref("users/" + uid + "/settings/longBreak").set(settings.longBreak);
        }
        else
        {
                console.log("No user logged in, data pushed to default");
                this.db.database.ref("users/" + "0" + "/settings/work").set(settings.work);
                this.db.database.ref("users/" + "0" + "/settings/interval").set(settings.interval);
                this.db.database.ref("users/" + "0" + "/settings/shortBreak").set(settings.shortBreak);
                this.db.database.ref("users/" + "0" + "/settings/longBreak").set(settings.longBreak);
        }
    }
}