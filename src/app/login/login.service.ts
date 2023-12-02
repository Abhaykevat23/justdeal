import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { login } from './login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
  redirectUrl: string | undefined;
  baseUrl: string = 'http://localhost/JD-API/user/';
  baseUrl2: string = '../../../JD-API/user/';


  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  islogin = new BehaviorSubject<boolean>(false);

  public checkuser(username: any, password: any) {
    return this.http.post<any>(this.baseUrl + 'login.php', { username, password }).pipe(map(result => {
      this.setToken(result[0].name);
      this.setToken2(result[0].id);
      this.setToken3(result[0].email);
      this.setToken4(result[0].city);
      this.setToken5(result[0].password);
      if (localStorage.getItem('token') == 'AdminOfJustDeal') {
        // this.islogin.next(true);
        this.router.navigate(['/app-admin']);
      }
      return result;
    }));
  }

  public adduser(name: any, email: any, password: any, city: any) {
    return this.http.post<any>(this.baseUrl + 'register.php', { name, email, password, city }).pipe(map(result => {
      return result;
    }));
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  setToken2(token2: string) {
    localStorage.setItem('token2', token2);
  }
  setToken3(token3: string) {
    localStorage.setItem('token3', token3);
  }
  setToken4(token4: string) {
    localStorage.setItem('token4', token4);
  }
  setToken5(token5: string) {
    localStorage.setItem('token5', token5);
  }
}
