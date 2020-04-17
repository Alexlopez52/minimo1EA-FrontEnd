import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import { student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private url = 'http://localhost:3000/api/student/todos'
  getStudents(): Observable<student[]>{
   
   return this.http.get<student[]>(this.url)
   
 }
 postStudent(nombre: student){
   console.log(nombre);
   return this.http.post(this.url,nombre)
 }
  constructor(private http: HttpClient) { }
}
