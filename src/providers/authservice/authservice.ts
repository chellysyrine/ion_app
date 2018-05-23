import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthserviceProvider Provider');
  }
  authEtudiant(data) {
    return this.http.post<any>('http://localhost:4100/auth/login', data)
       
}

}
