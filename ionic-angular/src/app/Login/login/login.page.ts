import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/Module/Usuario.module';
import { AutenthicationService } from 'src/app/services/autenthication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  pass: string;
  remember: string ;
  usuario: Usuario;

  constructor(
    private logserv: LoginService,
    private router: Router,
    private alertCtrl: AlertController,
    private auth: AutenthicationService
  ) { }

  ngOnInit() {
  }
  formLogin() {
    const Login  = {
      user: this.user,
      password: 'Adm1n2019!',
      Empresa: 'sysv3'
    };
    this.logserv.postLogin(Login)
    .subscribe((data) => {
      const anydata = data as any;
      if (anydata.resp.ok === 1) {
        this.usuario = anydata.usuario;
        this.auth.login(this.usuario);
        this.clean();
      } else {
        this.alertCtrl.create({header: 'Usuario y/o Contraseña', message: anydata.resp.okref,
        buttons: [{text: 'Cerrar', role: 'Cancel'}]})
          .then(alertEl => {
          alertEl.present();
          this.clean();
        });
      }
    });
  }
  private clean() {
    this.user = '';
    this.pass = '';
  }
}
