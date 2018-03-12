import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
  AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { ChatMessage } from '../models/message';

@Injectable()
export class ChatService {
  messagesCollection: AngularFirestoreCollection<ChatMessage>;
  messages: Observable<ChatMessage[]>

  constructor(public afs: AngularFirestore) {
    this.messagesCollection = this.afs.collection('message');
    this.messages = this.messagesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ChatMessage;
        data.id = a.payload.doc.id;
        return data;
      });
    });;
  }

  public getMessages() {
    return this.messages;
  }

  public sendMessage(message: ChatMessage) {
    this.messagesCollection.add(message);
  }

}
