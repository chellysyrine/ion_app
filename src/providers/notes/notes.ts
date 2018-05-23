import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NotesProvider Provider');
    
  }

  getNotes():Observable<any>{
    return this.http.get("http://localhost:4100/noteinfo");
  }
 getNotesbyId(id : number) :Observable<any> {
    return this.http.get("http://localhost:4100/noteinfo/"+ id );
 }

}
