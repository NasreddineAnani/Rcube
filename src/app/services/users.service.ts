import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }


  getUserById(id: any) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/users/${id}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((user) => {
        console.log(user);
        resolve(<any>user);
      });

    });
  }

  getUserByEmail(email: any) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/users?email=${email}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((user) => {
        console.log(user);
        resolve(<any>user);
      });

    });
  }

  getUserByUsername(username: string) {
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {

      this.http.get(`/users?username=${username}`, {headers: contentHeaders})
        .map(res => res.json().users)
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        })
        .subscribe((item) => {
          resolve(<any>item);
        });
    });
  }

  postUser(body: any) {
    console.log(body);
    console.log(JSON.stringify(body));

    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {

      this.http.post(`/users`, JSON.stringify(body), {headers: contentHeaders})
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

  putUser(id: string, body: any) {
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {

      this.http.put(`/users/${id}`, JSON.stringify(body), {headers: contentHeaders})
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

}
