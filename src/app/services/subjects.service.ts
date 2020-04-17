import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import { subject } from '../models/subject';
import { student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  httpOptions = { //para que el body del put se envie bien
    headers :new HttpHeaders ({'Content-Type':'application/json'})
  }
  private url = 'http://localhost:3000/api/subject/todos'
   getSubjects(): Observable<subject[]>{
    
    return this.http.get<subject[]>(this.url)
    
  }
  postSubjects(nombre: subject){
    console.log(nombre);
    return this.http.post(this.url,nombre)
    
  }
  addStudentToSubject(nombre: string, asignatura: String){
    var url2 = this.url + "/"+asignatura
    console.log(nombre);
    let nombre2="{ \"name\": \""+ nombre + "\"}";//megachapuza porque me pide estilo json pero parse no funciona
    return this.http.put<subject>(url2,nombre2,this.httpOptions )
    
  }
  constructor( private http: HttpClient) { }
}
