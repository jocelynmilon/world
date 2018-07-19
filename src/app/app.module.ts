import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import {  AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { from } from 'rxjs';
import { JoueurComponent } from './joueur/joueur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MessageComponent } from './message/message.component';

import {  MessagesService} from './services/messages.service';
import { AuthService } from './services/auth.service';
import { ContactComponent } from './contact/contact.component';

const CONFIG: FirebaseAppConfig = {
  apiKey: 'AIzaSyB3Ge01diIKsXQYriIjue3I6TclDFsZYyQ',
  authDomain: 'world-7a9be.firebaseapp.com',
  databaseURL: 'https://world-7a9be.firebaseio.com',
  projectId: 'world-7a9be',
  storageBucket: 'world-7a9be.appspot.com',
  messagingSenderId: '215728732335'
};

const routes: Routes = [
  {path: '', component: JoueurComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'message', component: MessageComponent},
  {path: 'carousel', component: CarouselComponent},
]; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    JoueurComponent,
    ConnexionComponent,
    MessageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(CONFIG),
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [MessagesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
