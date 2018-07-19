import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages$;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {

    this.messages$ = this.messagesService.getMessages();
  }

}
