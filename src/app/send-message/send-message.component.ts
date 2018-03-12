import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  message: ChatMessage = {
    userName: 'killaBee',
    email: 'natasha228@gmail.com',
  }

  input: string;

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.message.message != '') {
      this.message.timeSent = this.getDate();
      console.log(this.message);
      this.chat.sendMessage(this.message);
      this.message.message = '';
    }
  }

  getDate(): string {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} `
    + `${date.getHours()}:${date.getMinutes()}`;
  }

}
