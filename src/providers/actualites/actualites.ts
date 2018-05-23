import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ActualitesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActualitesProvider {

  constructor(public http: HttpClient) { }
  getActualites():Observable<any>{
    return this.http.get("http://localhost:4100/actualites");
  }
 getActualitesbyId(id : number) :Observable<any> {
    return this.http.get("http://localhost:4100/actualites/"+ id );
 }
/*addActualites(data) : Observable<any>{
    return this.http.post("http://localhost:4000/actualites", data);
}
updateActualites(id : number, data) : Observable<any>{
    return this.http.put("http://localhost:4000/actualites/" +id, data);

}
deleteActualites(id : number) : Observable<any>{
    return this.http.delete("http://localhost:4000/actualites/"+id );
}*/
}
