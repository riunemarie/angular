import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-touche',
  imports: [],
  templateUrl: './touche.html',
  styleUrl: './touche.css',
})
export class ToucheComponent {
  lettre = input.required<string>()
  onSendLetter = output<void>()
  envoyer() {
    this.onSendLetter.emit()
  }
}
