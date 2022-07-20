import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  login(email: any, password: any) {
    this.http.get(`${environment.baseURL}/users/login?email=${email}&password=${password}`).subscribe((res: any) => {
      if (res?.status_code === 200) {
        this.setToken(res?.accessToken);
        this.router.navigate(['/admin', res])
      }
      return throwError(new Error('Failed to Login'));
    }, (err)=> {
      console.log("Failed to Login");
      ;
    })
  }
}
