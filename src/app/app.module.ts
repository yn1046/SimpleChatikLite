import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
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
    BsDropdownModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
