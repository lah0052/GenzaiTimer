import { Injectable } from "@angular/core";
import { SettingsModel } from "./settings.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable(
    {providedIn: 'root'}
)

export class SettingsService{

    constructor(private db: AngularFireDatabase) {

    }

    getSettings()
    {

    }

    changeSettings(settings: SettingsModel)
    {
        this.db.database.ref("users/" + "0" + "/settings").set(settings);
       
    }
}