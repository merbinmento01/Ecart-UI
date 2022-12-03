import { ToastrService } from 'ngx-toastr';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
// import { constants } from './../modals/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient,
    private loader: NgxSpinnerService, private toastr:  ToastrService) { }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  saveUserData(data: any) {
    localStorage.setItem('userdata', data);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logOut() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userdata');
    this.router.navigate(['/login']);
  }

  login(email: any, password: any) {
    this.loader.show();
    this.http.get(`${environment.baseURL}/users/login?email=${email}&password=${password}`).subscribe((res: any) => {
      if (res?.data?.status_code === 200 && res?.data?.accessToken) {
        this.setToken(res?.data?.accessToken);
        this.saveUserData(JSON.stringify(res?.data?.data));
        this.toastr.success(res?.data?.status_code, res.data.message);
        this.router.navigate(['/dashboard'])
      } else {
        this.toastr.error(res?.data?.status_code, res.data.message);
      }
      this.loader.hide();
      return throwError(new Error('Failed to Login'));
    }, (err)=> {
      this.loader.hide();
      console.log(err.error);
      this.toastr.error(err.error.data.status_code, err.error.data.message);
      ;
    })
  }
}
