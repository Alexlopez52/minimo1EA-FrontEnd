import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http'; //poner para usar http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InstitucionComponent } from './institucion/institucion.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SubjectComponent,
    InstitucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
