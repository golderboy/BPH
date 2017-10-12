import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the AvatarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvatarProvider {

  constructor(public http: Http) {
    console.log('Hello AvatarProvider Provider');
  }

  async getAvatar(){
    const resp = await this.http.get('https://randomuser.me/api/?results=50').toPromise();
    return resp.json();
  }

}
