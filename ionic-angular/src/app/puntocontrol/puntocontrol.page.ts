import { Component, OnInit } from '@angular/core';
import { AutenthicationService } from '../services/autenthication.service';

@Component({
  selector: 'app-puntocontrol',
  templateUrl: './puntocontrol.page.html',
  styleUrls: ['./puntocontrol.page.scss'],
})
export class PuntocontrolPage implements OnInit {

  constructor(private auth: AutenthicationService) {}
  ngOnInit() {
    console.log('regreso a entrega');
  }
  logOut() {
    this.auth.logout();
  }

}
