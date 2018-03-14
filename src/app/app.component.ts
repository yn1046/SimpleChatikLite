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
  messages: ChatMessage[];

  constructor(public chat: ChatService, public auth: AuthService) {

  }

  ngOnInit(): void {
    this.chat.getMessages().subscribe(items => {
      console.log(items);
      this.messages = items;
    });
  }

  authFacebook(): void {
    this.auth.twitter();
    this.auth.login();
    console.log(this.auth.user);
  }
}
