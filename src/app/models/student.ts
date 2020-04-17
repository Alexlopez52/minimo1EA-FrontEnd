
export class student {
    name: String;
    address: String;
    phones: [
      {
       name: string,
       number:string
      }
    ]
    constructor(nombre:String,address:String){
      this.name=nombre
      this.address=address
  }
}
