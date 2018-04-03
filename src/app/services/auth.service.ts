import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, AuthProvider } from '@firebase/auth-types';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private afAuth: AngularFireAuth;
  user: User;
  isAuthorized: boolean = false;
  private provider: AuthProvider;

  constructor(afAuth: AngularFireAuth) {
    this.afAuth = afAuth;
  }

  facebook() {
    this.provider = new firebase.auth.FacebookAuthProvider();
  }

  twitter() {
    this.provider = new firebase.auth.TwitterAuthProvider();
  }

  login() {
    this.afterSignIn(this.afAuth.auth.signInWithPopup(this.provider));
  }

  logout() {
    console.log('logout called!!');
    this.afAuth.auth.signOut().then(()=> {
        console.log('reloading page...');
        location.reload();
      });
  }

  afterSignIn(prom: Promise<any>) {
    prom.then(result => {
      this.user = result.user;
      this.isAuthorized = true;
      console.log(this.user.displayName);
      console.log(this.user.uid);
    });
  }
}
