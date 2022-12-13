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
import { NgForm } from '@angular/forms';
import { TempTimerComponent } from './home-components/temp-timer/temp-timer.component';
import { TaskListComponent } from './home-components/task-list/task-list.component';
import { NotificationComponent } from './home-components/notification/notification.component';
import { CalenderComponent } from './planner-components/calender/calender.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AddTaskComponent } from './home-components/task-list/add-task/add-task.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AddEventComponent } from './planner-components/event/add-event/add-event.component';
import { AuthComponent } from './auth/auth.component';
import { UserInforComponent } from './user-infor/user-infor.component';
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
    NotificationComponent,
    CalenderComponent,
    LoginLayoutComponent,
    AddTaskComponent,
    AddEventComponent,
    AuthComponent,
    UserInforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase,'GenzaiTimer'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
