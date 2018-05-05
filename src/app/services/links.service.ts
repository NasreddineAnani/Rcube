import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class LinksService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  getLink(id: any) {
    return new Promise((resolve, reject) => {

       const contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        this.http.get(`/links/${id}`, {headers: contentHeaders})
          .map(res => res.json())
          .catch((error: any) => {
            reject(error.json().error || 'Server error');
            return Observable.throw(error.json().error || 'Server error');
          }).subscribe((link) => {
            console.log(link);
            resolve(<any>link);
        });

    });
  }

  getLinks(email: string) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/links?email=${email}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((link) => {
        resolve(<any>link);
      });

    });
  }

  getLinksByUsername(username: string) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/links?username=${username}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((link) => {
        resolve(<any>link);
      });

    });
  }

  postLink(body: any) {
    console.log(body);
    body['email'] = this.authService.currentUser().email;

    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {

      this.http.post(`/links`, JSON.stringify(body), {headers: contentHeaders})
        .map(res => res)
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        })
        .subscribe((item) => {
          resolve(item);
        });
    });
  }

  putLink(id: string, body: any) {
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {

      this.http.put(`/links/${id}`, JSON.stringify(body), {headers: contentHeaders})
        .map(res => res)
        .catch((error) => {
          console.log(error)
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        })
        .subscribe((item) => {
          console.log(item);
          resolve(item);
        });
    });
  }

}
