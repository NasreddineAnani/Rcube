import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  loggedIn: boolean = false;

  constructor(private af: AngularFireAuth, private router: Router) {

  }

  currentUser() {
    return this.af.auth.currentUser;
  }

  login(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  register(email, password) {
    return this.af.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  signOut() {
    this.af.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
