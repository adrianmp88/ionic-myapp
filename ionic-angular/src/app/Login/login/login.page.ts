import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  pass: string;
  remember: string;
  constructor(
    private logserv: LoginService
  ) { }

  ngOnInit() {
  }
  formLogin() {
    this.logserv.getLogin(this.user, this.pass);
  }
}
