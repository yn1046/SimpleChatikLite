import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, AuthProvider } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import { WebAuth } from 'auth0-js';

@Injectable()
export class AuthService {
  private afAuth: AngularFireAuth;
  private vkAuth: WebAuth;
  user: User;
  isAuthorized: boolean = false;
  private provider: AuthProvider;
  private isVkAuth: boolean = false;

  constructor(afAuth: AngularFireAuth) {
    this.afAuth = afAuth;
    this.vkAuth = this.initWebAuth();
  }

  initWebAuth() {
    return new WebAuth({
      domain:       'yn1046.eu.auth0.com',
      clientID:     'S8ur7zqPJirzlRNlMKYbgBIUmrFmr8Xe'
    });
  }  

  facebook() {
    this.provider = new firebase.auth.FacebookAuthProvider();
  }

  twitter() {
    this.provider = new firebase.auth.TwitterAuthProvider();
  }

  vk() {
    this.isVkAuth = true;
  }

  login() {
    if (this.isVkAuth) {
      this.vkAuth.popup.authorize({
        domain: 'yn1046.eu.auth0.com',
        connection: 'vkontakte',
        redirectUri: 'yn1046.eu.auth0.com',
        responseType: 'token'
      }, () => {});
    }
    else {
      this.afterSignIn(this.afAuth.auth.signInWithPopup(this.provider));
    }
  }

  logout() {
    console.log('logout called!!');
    if (this.isVkAuth) {
      this.vkAuth.logout({
        returnTo: '/',
        clientID: 'S8ur7zqPJirzlRNlMKYbgBIUmrFmr8Xe'
      });
      this.isVkAuth = false;
    }
    else {
      this.afAuth.auth.signOut().then(()=> {
        console.log('reloading page...');
        location.reload();
      });
    }
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
