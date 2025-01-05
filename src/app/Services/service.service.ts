import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private botToken: string = '8101138575:AAEc8bjYts4J5lI7LflCB0mBh47VhfTIM9c';
  private apiUrl: string = `https://api.telegram.org/bot${this.botToken}`;

  constructor(private http: HttpClient) {}

  getUserName():Observable<any>{
    const url = `${this.apiUrl}/getme`;
    return this.http.get(url); 
  }
}
