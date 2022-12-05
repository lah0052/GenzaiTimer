import { Component, OnInit } from '@angular/core';
import { SettingsModel } from './settings.model';
import { SettingsService } from './settings.service';
@Component({
  selector: 'app-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.css']
})
export class SettingsLayoutComponent implements OnInit {

  constructor(private ss: SettingsService) { }

  ngOnInit(): void {
  }

  changeSettings(settings: SettingsModel)
  {
    console.log("You clocked change settings");
    console.log(settings);
    this.ss.changeSettings(settings);
  }

}
