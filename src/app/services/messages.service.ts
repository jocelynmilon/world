import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private afDb: AngularFireDatabase) { }

  getMessages() {
    return this.afDb.list('messages').valueChanges();
  }
  createMessage(message) {
    this.afDb.list('messages').push(message);
  }
}
