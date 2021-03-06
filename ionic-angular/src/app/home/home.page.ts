import { Component, OnInit } from '@angular/core';
import { AutenthicationService } from '../services/autenthication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AutenthicationService) {}
  ngOnInit() {
    console.log('regreso a entrega');
  }
  logOut() {
    this.auth.logout();
  }
}
