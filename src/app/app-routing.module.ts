import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayErrComponent } from './display-err/display-err.component';
import { HomeComponent } from './home/home.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component'
import { ResumeComponent } from './resume/resume.component';
const routes: Routes = [
  {path : '' , component: HomeComponent },
  // {path : '', redirectTo: '/emplist', pathMatch: 'full'},
  {path : 'disperr' , component: DisplayErrComponent },
  {path : 'emplist' , component: EmpListComponent },
  {path : 'empdetails/:id' , component: EmpDetailsComponent },
  {path : 'Resume/:id', component : ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
