import { Injectable } from '@angular/core';

import { AutenthicationService } from './autenthication.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private auth: AutenthicationService) { }
  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}