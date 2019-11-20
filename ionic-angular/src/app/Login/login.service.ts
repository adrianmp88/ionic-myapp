import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interfaces } from '../Seguimientos/interfaces';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://mtic.ddns.net/systrack_v3/asp/ws/tracking2.asp?guideCode=GP001000005';
  private apilogin = 'http://mtic.ddns.net/systrack_v3/asp/ws/deliveryApp/login.asp?';
  constructor(
    private http: HttpClient
  ) { }
  getGuia() {
    const path = `${this.api}`;
    return this.http.get<Interfaces[]>(path);
  }
  getLogin(user: string, pass: string) {
    const path = `${this.apilogin}username=${user}&password=${pass}`;
    console.log(path);
  }
}
