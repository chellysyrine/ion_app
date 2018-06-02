import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Etudiant} from "../../models/etudiant";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EtudiantProvider {

  constructor(public http: HttpClient) { }
  verifEtudiants(data):Observable<any>{
    return this.http.post<any>("http://localhost:4100/etudiants/verif",data );
  }
 


}
