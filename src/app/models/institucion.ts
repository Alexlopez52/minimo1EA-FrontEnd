
export class institucion {
    nombre:String
    descripcion:String;
    url: String;
    responsable:String;


    constructor(insti:String, desc:String, ur: String,resp:String,){
      this.nombre=insti;
      this.descripcion=desc;
      this.url=ur;
      this.responsable=resp;
  }
}
