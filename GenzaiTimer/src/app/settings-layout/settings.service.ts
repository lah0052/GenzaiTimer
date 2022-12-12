import { Injectable } from "@angular/core";
import { SettingsModel } from "./settings.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'

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
        this.db.database.ref("users/" + "0" + "/settings/work").set(settings.work);
        this.db.database.ref("users/" + "0" + "/settings/interval").set(settings.interval);
        this.db.database.ref("users/" + "0" + "/settings/shortBreak").set(settings.shortBreak);
        this.db.database.ref("users/" + "0" + "/settings/longBreak").set(settings.longBreak);
    }
}