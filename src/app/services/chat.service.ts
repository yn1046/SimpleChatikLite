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
    this.messages = this.afs.collection('message').valueChanges();
  }

  public getMessages() {
    return this.messages;
  }

}
