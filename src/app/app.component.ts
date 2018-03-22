import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { ChatMessage } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Simple Chatik';

  constructor(public auth: AuthService) {

  }

  ngOnInit(): void {
    this.scrollBottom();
  }

  authTwitter(): void {
    this.auth.twitter();
    this.auth.login();
  }

  authFacebook(): void {
    this.auth.facebook();
    this.auth.login();
  }

  authVk(): void {
    this.auth.vk();
    this.auth.login();
  }

  scrollBottom() {
    console.log('calling scroll from app root');
    document.body.scrollTop = document.body.scrollHeight;
  }
}
