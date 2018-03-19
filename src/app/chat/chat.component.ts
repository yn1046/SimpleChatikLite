import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';
import { ChatMessage } from '../models/message';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[];

  constructor(public chat: ChatService, public auth: AuthService) { }

  ngOnInit() {
    this.bindActionOnChange(this.chat.getMessages()).subscribe(items => {
      console.log(items);
      this.messages = items;
    });
  }

  private bindActionOnChange(myCollection: AngularFirestoreCollection<ChatMessage>) {
    return myCollection.snapshotChanges().map(changes => {
      console.log('invoked change');
      return changes.map(a => {
        const data = a.payload.doc.data() as ChatMessage;
        data.id = a.payload.doc.id;
        return data;
      });
    });;
  }

}
