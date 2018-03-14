import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  loggedIn: boolean = false;

  constructor(private af: AngularFireAuth, private router: Router) {

  }

  login(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
  }

  signOut() {
    this.af.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
