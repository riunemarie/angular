import { Component, input, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification';
import { Message } from '../../../model/message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-participant',
  imports: [FormsModule],
  templateUrl: './participant.html',
  styleUrl: './participant.css',
})
export class ParticipantComponent implements OnInit {
  message = ''
  nom = input.required<string>()
  messages: Message[] = []
  constructor(private notify: NotificationService) { }
  ngOnInit(): void {
    this.notify.getMessage().subscribe(m => {
      if (m.nom != this.nom()) {
        this.messages.push(m)
      }
    })
  }
  envoyer() {
    this.notify.sendMessage({ nom: this.nom(), contenu: this.message })
    this.message = ''
  }


}
