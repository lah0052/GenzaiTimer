import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { JournalLayoutComponent } from './journal-layout/journal-layout.component';
import { PlannerLayoutComponent } from './planner-layout/planner-layout.component';

import { TempTimerComponent } from './home-components/temp-timer/temp-timer.component';

import { TaskListComponent } from './home-components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    SettingsLayoutComponent,
    JournalLayoutComponent,
<<<<<<< HEAD
    PlannerLayoutComponent,
    TempTimerComponent,
    TaskListComponent
=======
    PlannerLayoutComponent
>>>>>>> f705212d0279e91cdcf97c5213b972efe6dd4181
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
