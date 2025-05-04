import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { API_ENDPOINT } from '../app.constant';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor(private _authService: AuthService) {
    const { id } = this._authService.getUserDetails()
    this.socket = io(API_ENDPOINT, { query: { userId: id } })
  };

  // Emit event
  emit(event: string, data?: any): void {
    this.socket.emit(event, data);
  }

  // Listen to an event
  listen<T>(event: string): Observable<T> {
    return new Observable(observer => {
      this.socket.on(event, (data: T) => {
        observer.next(data);
      });

      // Cleanup when unsubscribed
      return () => this.socket.off(event);
    });
  }

  disconnect(): void {
    this.socket.disconnect();
  }
}
