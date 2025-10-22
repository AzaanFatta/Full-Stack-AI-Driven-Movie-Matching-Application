import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl = "http://localhost:8081/user";

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<string> {
    return this.httpClient.post(this.baseUrl, user, { responseType: 'text' });
  }
}


