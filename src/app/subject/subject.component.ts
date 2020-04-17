import { Component, OnInit } from '@angular/core';
import { subject } from '../models/subject';
import { SubjectsService } from '../services/subjects.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: subject[];
  subjectname : String ;
  subjectname2 : String ;
  studentname: string;

  public getSubjects(){
    this.subjectservice.getSubjects().subscribe(subjects => this.subjects = subjects)
    console.log(this.subjects);
  }
  
  public addsubj(nombre : String ){
    var newsubject : subject= new subject(this.subjectname)
    console.log(newsubject);
    this.subjectservice.postSubjects(newsubject).subscribe(
      res =>console.log(res),
      err=> console.log(err)
      );
  }
  public addtosubj(estudiante : string,asignatura:String){
    console.log(estudiante);
    this.subjectservice.addStudentToSubject(estudiante,asignatura).subscribe(
      res =>console.log(res),
      err=> console.log(err)
      );

  }
  constructor(private subjectservice : SubjectsService) { 

  } 
  
  ngOnInit(): void {
  }

}
