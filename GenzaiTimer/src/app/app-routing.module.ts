import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './home-components/task-list/add-task/add-task.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { JournalLayoutComponent } from './journal-layout/journal-layout.component';
import { PlannerLayoutComponent } from './planner-layout/planner-layout.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { AddEventComponent } from './planner-components/event/add-event/add-event.component';
import { AuthComponent } from './auth/auth.component';




const routes: Routes = [
  {path: "", component: HomeLayoutComponent},
  {path: "home", component: HomeLayoutComponent},
  {path: "planner", component: PlannerLayoutComponent},
  {path: "journal", component: JournalLayoutComponent},
  {path: "settings", component: SettingsLayoutComponent},
  {path: "test", component: AddTaskComponent},
  {path: "event", component: AddEventComponent},
  {path: "auth", component:AuthComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
