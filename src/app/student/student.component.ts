import { Component, OnInit } from '@angular/core';
import { student } from '../models/student';
import {StudentserviceService} from '../services/studentservice.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  students: student[];
  studentname : String ;
  studentaddress: String;

  public getStudents(){
    this.studentservice.getStudents().subscribe(students => this.students = students)
    console.log(this.students);
  }
  constructor(private studentservice : StudentserviceService) { }
public addstud(nombre : String ){
var newstudent : student= new student(this.studentname,this.studentaddress)
console.log(newstudent);
  this.studentservice.postStudent(newstudent).subscribe(
    res =>console.log(res),
    err=> console.log(err));

}

  ngOnInit(): void {
  }

}
