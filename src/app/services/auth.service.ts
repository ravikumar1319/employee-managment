import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_ENDPOINT } from '../app.constant';
import { Login } from '../../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: Login): Observable<{ user: Partial<Login>; token: string }> {
    return this.http.post<{ user: Partial<Login>; token: string }>(API_ENDPOINT + '/api/auth/login', data).pipe(
      map(res => res)
    )
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('userDetails')
  }
}
