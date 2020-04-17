import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import { institucion } from '../models/institucion';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {
  httpOptions = { //para que el body del put se envie bien
    headers :new HttpHeaders ({'Content-Type':'application/json'})
  }
  private url = 'http://localhost:3000/api/instituciones'
   getInstituciones(): Observable<institucion[]>{
    
    return this.http.get<institucion[]>(this.url)
    
  }
  postInstitucion(nombre: institucion){
    console.log(nombre);
    return this.http.post(this.url,nombre)
    
  }
  updateInstitucion(nombre: String, institucion: institucion){
    var url2 = this.url + "/"+nombre;
console.log(url2);
    console.log(nombre);
    return this.http.put<institucion>(url2,institucion,this.httpOptions )
    
  }
  constructor( private http: HttpClient) { }
}
