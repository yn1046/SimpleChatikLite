import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, AuthProvider } from '@firebase/auth-types';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements OnInit {
  private afAuth: AngularFireAuth;
  user: User;
  isAuthorized: boolean = false;
  private provider: AuthProvider;

  constructor(afAuth: AngularFireAuth) {
    this.afAuth = afAuth;
  }

  ngOnInit() { }

  facebook() {
    this.provider = new firebase.auth.FacebookAuthProvider();
  }

  twitter() {
    this.provider = new firebase.auth.TwitterAuthProvider();
  }

  login() {
    this.afAuth.auth.signInWithPopup(this.provider).then(result => {
      this.user = result.user;
      this.isAuthorized = true;
      console.log(this.user.displayName);
      console.log(this.user.uid);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
