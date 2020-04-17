import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { institucion } from '../models/institucion';
import { InstitucionService } from '../services/institucion.service';

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.css']
})
export class InstitucionComponent implements OnInit {
  instituciones: institucion[];
  institucionname : String ;
  instituciondesc : String ;
  institucionurl: string;
  institucionresponsable : String;

  public getInstituciones(){
    this.institucionservice.getInstituciones().subscribe(institucione => this.instituciones = institucione)
    console.log(this.instituciones);
  }
  
  public addInst(nombre : String ,desc:String,url:string,resp:String){
    var newInstitucion : institucion = new institucion(nombre,desc,url,resp)
    console.log(newInstitucion);
    this.institucionservice.postInstitucion(newInstitucion).subscribe(
      res =>console.log(res),
      err=> console.log(err)
      );
  }
  public updateInst(nombre : String ,desc:String,url:string,resp:String){
    var newInstitucion : institucion = new institucion(nombre,desc,url,resp)
    console.log(newInstitucion);
    this.institucionservice.updateInstitucion(nombre,newInstitucion).subscribe(
      res =>console.log(res),
      err=> console.log(err)
      );

  } 


  constructor(private institucionservice : InstitucionService) { 
}
  ngOnInit(): void {
  }

}
