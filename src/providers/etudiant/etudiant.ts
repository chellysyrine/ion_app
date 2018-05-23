import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Etudiant} from "../../models/etudiant";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EtudiantProvider {

  constructor(public http: HttpClient) { }
  getEtudiants():Observable<any>{
    return this.http.get("http://localhost:4100/etudiants");
  }
 getEtudiantbyId(id : number) :Observable<any> {
    return this.http.get("http://localhost:4100/etudiants/"+ id );
 }
addEtudiant(data) : Observable<any>{
    return this.http.post("http://localhost:4100/etudiants", data);
}
updateEtudiant(id : number, data) : Observable<any>{
    return this.http.put("http://localhost:4100/etudiants/" +id, data);

}
deleteEtudiant(id : number) : Observable<any>{
    return this.http.delete("http://localhost:4100/etudiants/"+id );
}


}
