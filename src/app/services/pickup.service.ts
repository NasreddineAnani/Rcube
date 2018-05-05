import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Headers, Http} from "@angular/http";
import {AuthService} from "./auth.service";
import {UsersService} from "./users.service";

@Injectable()
export class PickupService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  postPickup(body: any) {

    this.usersService.getUserByEmail(this.authService.currentUser().email).then(res => {
      console.log(res);
      body['coord'] = res['users'][0].coord;
      body['address'] = res['users'][0].address;
      body['email'] = this.authService.currentUser().email;

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      return new Promise((resolve, reject) => {

        this.http.post(`/pickup`, JSON.stringify(body), {headers: contentHeaders})
          .map(res => res)
          .catch((error: any) => {
            reject(error.json().error || 'Server error');
            return Observable.throw(error.json().error || 'Server error');
          })
          .subscribe((item) => {
            resolve(item);
          });
      });
    })
  }

}
