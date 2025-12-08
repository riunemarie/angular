import { Component } from '@angular/core';
import { ParticipantComponent } from '../participant/participant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tchat',
  imports: [ParticipantComponent, FormsModule],
  templateUrl: './tchat.html',
  styleUrl: './tchat.css',
})
export class TchatComponent {
  nom = ''
  noms: string[] = []
  ajouterParticpant() {
    if (!this.noms.includes(this.nom.toUpperCase().trim())) {
      this.noms.push(this.nom.toUpperCase().trim())
      this.nom = ''
    } else {
      alert("Ce nom est déjà utilisé, merci de choisir un autre")
    }

  }
}
