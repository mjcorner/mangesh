import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayErrComponent } from './display-err/display-err.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HomeComponent } from './home/home.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ResumeComponent } from './resume/resume.component';
import { GrdFilterPipe } from './grd-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayErrComponent,
    EmpListComponent,
    HomeComponent,
    EmpDetailsComponent,
    ResumeComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
