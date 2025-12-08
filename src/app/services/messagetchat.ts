import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Messagetchat {
  
    private messageSubject = new Subject<{ from: string, text: string }>();
  messages$ = this.messageSubject.asObservable();

  sendMessage(from: string, text: string) {
    this.messageSubject.next({ from, text });
  }
}


