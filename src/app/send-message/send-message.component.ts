import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/message';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  message: ChatMessage = {
    userName: 'killaBee',
    email: 'natasha228@gmail.com',
  };

  input: string;

  constructor(private chat: ChatService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.message.message != '') {
      this.message.userName = this.auth.user.displayName;
      this.message.email = this.auth.user.email;
      this.message.timeSent = new Date();
      this.message.timeSentString = this.getStringDate(this.message.timeSent);
      console.log(this.message);
      this.chat.sendMessage(this.message);
      this.message.message = '';
    }
  }

  getStringDate(passedDate: Date): string {
    let date = passedDate;
    return `${('0'+date.getDate()).slice(-2)}/${('0'+date.getMonth()+1).slice(-2)}/${date.getFullYear()} `
    + `${('0'+date.getHours()).slice(-2)}:${('0'+date.getMinutes()).slice(-2)}`;
  }

}
