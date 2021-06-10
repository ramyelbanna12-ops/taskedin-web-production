import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskComponent } from 'src/app/components/tasks/create-task/create-task.component';
import { MyTasksComponent } from 'src/app/components/tasks/my-tasks/my-tasks.component';
import { SentTasksComponent } from 'src/app/components/tasks/sent-tasks/sent-tasks.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultComponent } from './default.component';

import { CompanyAdminsComponent } from 'src/app/components/admin/company-admins/company-admins.component';
import { CompanyDepartmentsComponent } from 'src/app/components/admin/company-departments/company-departments.component';
import { CompanyProfileComponent } from 'src/app/components/admin/company-profile/company-profile.component';

@NgModule({
  declarations: [
    DefaultComponent,
    CreateTaskComponent,
    MyTasksComponent,
    SentTasksComponent,
    CompanyProfileComponent,
    CompanyAdminsComponent,
    CompanyDepartmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    BrowserModule
  ]
})
export class DefaultModule { }
