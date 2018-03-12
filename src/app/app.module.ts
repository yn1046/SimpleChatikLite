import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ChatService } from './services/chat.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SendMessageComponent } from './send-message/send-message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
