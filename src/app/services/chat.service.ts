import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
  AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { ChatMessage } from '../models/message';

@Injectable()
export class ChatService {
  messagesCollection: AngularFirestoreCollection<ChatMessage>;

  constructor(public afs: AngularFirestore) {
    this.messagesCollection = this.afs.collection('message', ref => ref.orderBy('timeSent', 'asc'));
  }

  public getMessages() {
    console.log('retrieved messages');
    return this.messagesCollection;
  }

  public sendMessage(message: ChatMessage) {
    console.log('sended a message');
    this.messagesCollection.add(message);
  }

}
