import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  image: any = ['/assets/images/hl.jpg', '/assets/images/sm.jpg', '/assets/images/aa.jpg', '/assets/images/su.jpg'];
  image2: any = ['/assets/images/bp.jpg', '/assets/images/ds.jpg', '/assets/images/lh.jpg', '/assets/images/bm.jpg'];
  image3: any = ['/assets/images/rv.jpg', '/assets/images/tl.jpg', '/assets/images/pk.jpg', '/assets/images/ar.jpg'];
  image4: any = ['/assets/images/dd.jpg', '/assets/images/bm.png', '/assets/images/ct.jpg', '/assets/images/sn.jpg'];
  image5: any = ['/assets/images/pp.jpg', '/assets/images/nk.jpg', '/assets/images/nf.jpg', '/assets/images/km.jpg'];
  image6: any = ['/assets/images/ag.jpg', '/assets/images/og.jpg', '/assets/images/od.jpg', '/assets/images/ft.jpg'];

  width: any = '200';
  height: any = '200';

  constructor(private messagesService: MessagesService) {

   }
  
  onMessageCreated(message) {
    console.log('message retrieved', message);
    this.messagesService.createMessage({
      noms: message.value.noms,
      email: message.value.email,
      text: message.value.message
    });
  }
  ngOnInit() {
  }

}
