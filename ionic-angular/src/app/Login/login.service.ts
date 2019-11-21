import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Module/Login.module';

import { Usuario } from '../Module/Usuario.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://mtic.ddns.net/systrack_v3/asp/ws/tracking2.asp?guideCode=GP001000005';
  private apilogin = 'https://mtic.ddns.net/ApiSystrack/api/login';

  constructor(
    private http: HttpClient
  ) { }


  postLogin(login: Login) {
    const path = `${this.apilogin}`;
    return this.http.post(path, login);
  }
}
