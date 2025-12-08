import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personne } from '../../../models/personne';

@Component({
  selector: 'app-personne-form',
  imports: [FormsModule],
  templateUrl: './personne-form.html',
  styleUrl: './personne-form.css',
})
export class PersonneFormComponent {
  personne = model.required<Personne>()
  label = input.required<string>()
  personneChange = output<Personne>();
  onSubmit = output<void>();
  envoyer() {
    this.onSubmit.emit()
  }
}
