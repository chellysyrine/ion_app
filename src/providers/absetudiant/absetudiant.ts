import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the AbsetudiantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AbsetudiantProvider   {

  constructor(public http: HttpClient) {}
    getabsenceEtudiant(id: number):Observable<any>{
      return this.http.get("http://localhost:4100/absetudiant/nom/"+ id);
    }
  getNombreabsence(id : number):Observable<any>{
    return this.http.get("http://localhost:4100/absetudiant/"+ id);
  }
  getSeanceetudiant(id : number):Observable<any>{
    return this.http.get("http://localhost:4100/seancetudiant/seance/"+ id);
  }

}
