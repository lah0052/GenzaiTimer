import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { JournalLayoutComponent } from './journal-layout/journal-layout.component';
import { PlannerLayoutComponent } from './planner-layout/planner-layout.component';
import {SideNavbarComponent} from './home-components/side-navbar/side-navbar.component';
import {HttpClientModule} from '@angular/common/http';


import { TempTimerComponent } from './home-components/temp-timer/temp-timer.component';

import { TaskListComponent } from './home-components/task-list/task-list.component';
import { NotificationComponent } from './home-components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    SettingsLayoutComponent,
    JournalLayoutComponent,
    PlannerLayoutComponent,
    TempTimerComponent,
    TaskListComponent,
    PlannerLayoutComponent,
    SideNavbarComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
