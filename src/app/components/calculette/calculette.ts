import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculette',
  imports: [FormsModule],
  templateUrl: './calculette.html',
  styleUrl: './calculette.css',
})
export class CalculetteComponent {
  valeur1: number | null = null
  valeur2: number | null = null
  resultat: number | null = null
  erreur: string | null = null
  operateur = ''
  calculer(event: Event) {


    const op = (event.target as HTMLButtonElement).innerHTML.trim()
    console.log(op);

    this.operateur = op 
    this.resultat = null
    this.erreur = null
    if (this.valeur1 != null && !isNaN(this.valeur1) && this.valeur2 != null && !isNaN(this.valeur2)) {
      switch (op) {
        case '+':
          this.resultat = this.valeur1 + this.valeur2
          break;
        case '-':
          this.resultat = this.valeur1 - this.valeur2
          break;
        case '*':
          this.resultat = this.valeur1 * this.valeur2
          break;
        case '/':
          if (this.valeur2 != 0) {
            this.resultat = this.valeur1 / this.valeur2
          } else {
            this.erreur = "Problème de division par zéro"
          }
          break;
      }
    } else {
      this.erreur = "Les deux champs sont obligatoires"
    }
  }
}
