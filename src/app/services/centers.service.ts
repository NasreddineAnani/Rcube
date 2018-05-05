import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";

@Injectable()
export class CentersService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  getCenterByPosition(lat: string, long: string) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/centers?lat=${lat}&long=${long}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((link) => {
        resolve(<any>link);
      });

    });
  }

  getCenterByAddress(address: string) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/nearestCenter?address=${address}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((link) => {
        resolve(<any>link);
      });

    });
  }

  getDayTrash() {
    return new Promise((resolve, reject) => {

      this.usersService.getUserByEmail(this.authService.currentUser().email).then(res => {

        const address = res['users'][0].address;
        const contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        this.http.get(`/trashDay?address=${address}`, {headers: contentHeaders})
          .map(res => res.json())
          .catch((error: any) => {
            reject(error.json().error || 'Server error');
            return Observable.throw(error.json().error || 'Server error');
          }).subscribe((link) => {
          resolve(<any>link);
        });
      });


    });
  }

}
