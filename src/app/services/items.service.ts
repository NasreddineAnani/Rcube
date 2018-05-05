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
export class ItemsService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  getItem(id: any) {
    return new Promise((resolve, reject) => {

       const contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        this.http.get(`/items/${id}`, {headers: contentHeaders})
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

  getItems(email: string) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/items?email=${email}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((link) => {
        resolve(<any>link);
      });

    });
  }

  getItemsByUsername(username: string) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/items?username=${username}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((link) => {
        resolve(<any>link);
      });

    });
  }

  getItemsByCategorie(categorie: string) {
    return new Promise((resolve, reject) => {

      const contentHeaders = new Headers();
      contentHeaders.append('Accept', 'application/json');
      contentHeaders.append('Content-Type', 'application/json');

      this.http.get(`/items?categorie=${categorie}`, {headers: contentHeaders})
        .map(res => res.json())
        .catch((error: any) => {
          reject(error.json().error || 'Server error');
          return Observable.throw(error.json().error || 'Server error');
        }).subscribe((link) => {
        resolve(<any>link);
      });

    });
  }

  postItems(body: any) {
    console.log(body);
    body['email'] = this.authService.currentUser().email;

    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {

      this.http.post(`/items`, JSON.stringify(body), {headers: contentHeaders})
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

  putItems(id: string, body: any) {
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {

      this.http.put(`/items/${id}`, JSON.stringify(body), {headers: contentHeaders})
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
