import {student} from "./student";

export class subject {
    _id :String;
    name: String;
    students: [student];

    constructor(nombre:String){
        this.name=nombre
    }
}
