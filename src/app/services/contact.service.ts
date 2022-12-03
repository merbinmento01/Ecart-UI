import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as socket from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  socket: any;

  constructor(private http: HttpClient) {
    this.socket = socket.io('http://localhost:5000');
  }

  getContacts(agencyId: string) {
    return this.http.get(`${environment.baseURL}/contacts/list?agencyId=${agencyId}`);
  }

  listen(event: String): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, (data: any) => {
        // console.log(event,data);
        observer.next(data);
      })
    });
  }

  emit(event: String, data: any) {
    this.socket.emit(event, data);
  }
}
