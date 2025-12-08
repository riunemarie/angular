import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class SecondComponent implements OnInit, OnDestroy {
  subscription!: Subscription
  messages: string[] = []
  constructor(private ms: MessageService) { }

  ngOnInit(): void {
    this.subscription = this.ms.getMessage().subscribe(text => this.messages.push(text))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
