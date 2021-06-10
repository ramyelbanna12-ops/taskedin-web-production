import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyAdminsComponent } from './components/admin/company-admins/company-admins.component';
import { CompanyDepartmentsComponent } from './components/admin/company-departments/company-departments.component';
import { CompanyProfileComponent } from './components/admin/company-profile/company-profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';
import { MyTasksComponent } from './components/tasks/my-tasks/my-tasks.component';
import { SentTasksComponent } from './components/tasks/sent-tasks/sent-tasks.component';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path : 'login', component : LoginComponent },
  {
    path : 'tasking',
    component : DefaultComponent,
    children : [
      { path : 'my-tasks' , component : MyTasksComponent},
      { path : 'sent-tasks' , component : SentTasksComponent },
      { path : 'create' , component : CreateTaskComponent},
    ]
  },
  {
    path : 'admin',
    component : DefaultComponent,
    children : [
      { path : 'company-admins' , component : CompanyAdminsComponent},
      { path : 'company-departments' , component : CompanyDepartmentsComponent },
      { path : 'company-profile' , component : CompanyProfileComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }