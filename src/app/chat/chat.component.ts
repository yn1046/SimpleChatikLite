import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';
import { ChatMessage } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {
  messages: ChatMessage[];

  constructor(public chat: ChatService, public auth: AuthService) { }

  ngOnInit() {
    this.chat.getMessages().subscribe(items => {
      console.log(items);
      this.messages = items;
    });
    this.scrollBottom();
  }

  ngOnChanges() {
    this.scrollBottom();
  }

  scrollBottom() {
    let feed = document.getElementById("feed");
    feed.scrollTop = feed.scrollHeight;
  }

}
