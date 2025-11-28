import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Personne } from '../../models/personne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire-simple',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  personne: Personne = {}
  personnes: Personne[] = []
  afficher(form: NgForm) {
    this.personnes.push({ ...this.personne })
    // this.personnes.push(form.value)
    // console.log(this.personne);
    // console.log(form.value);
    form.reset()
    // afficher les personnes ajoutées dans une liste HTML
    // en dessous du formulaire 
  }
}

/*
Dans une balise form, ajouter trois champs
nom,
prenom
age
et un bouton de soumission
en cliquant sur le bouron on affiche 
les données du formulaire dans la console
sous forme d'objet 

*/
