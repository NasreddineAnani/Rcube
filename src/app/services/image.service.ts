import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImageService {

  constructor(private http: Http) { }

  getImages(q: any) {
    return new Promise((resolve, reject) => {

       const contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        this.http.get(`localhost:8080/images?q=${q}`, {headers: contentHeaders})
          .map(res => res.json())
          .catch((error: any) => {
            reject(error.json().error || 'Server error');
            return Observable.throw(error.json().error || 'Server error');
          }).subscribe((images) => {

          resolve(images.images);
        });

    });
  }

}
