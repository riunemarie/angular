import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private subject = new Subject<Message>()

  sendMessage(m: Message) {
    this.subject.next(m)
  }
  getMessage() {
    return this.subject
  }
}
