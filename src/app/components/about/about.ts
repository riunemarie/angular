
import { Component } from '@angular/core';
import Stagiaire from '../../classes/stagiaire';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { GetCharPipe } from "../../pipes/get-char-pipe";
import { EvenValuePipe } from "../../pipes/evenvalue-pipe";
import { CompteurComponent } from "../interaction-module/compteur/compteur";

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, GetCharPipe, EvenValuePipe, CompteurComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  //  attributs
  isDisabled = true
  title = 'angular-standalone';
  stagiaire = new Stagiaire(100, "Wick", "John")
  stagiaire2 = new Stagiaire(100, "Dalton")
  numbers = [2, 3, 8, 5, 1]
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];
  couleur = 'white'
  bgCouleur = 'tomato'
  style = {
    color: 'white',
    backgroundColor: 'dodgerblue'
  }
  moyennes: number[] = [18, 5, 11, 15]
  firstname = "Kostas"
  lastname = "Mitroglou"
  ville = "Toulouse"
  codePostal = "31000"
  aujourdhui = Date.now()
  constructor(private router: Router) { }
  // méthodes
  afficherBonjour() {
    return "Bonjour"
  }
  alertBonjour() {
    alert("Bonjour")
  }
  switchState() {
    this.isDisabled = !this.isDisabled
  }
  afficherTexte(event: Event) {
    // le dernier caractère saisi
    console.log((event as InputEvent).data);

    // le contenu de l'élément HTML input
    console.log((event.target as HTMLInputElement).value);

  }
  goToStagiaire() {
    // this.router.navigateByUrl('/stagiaire/Clinton/Bill')
    this.router.navigate(['/stagiaire', this.lastname, this.firstname])
  }
  goToAdresse() {
    // this.router.navigateByUrl('/stagiaire/Clinton/Bill')
    this.router.navigate(
      ['/adresse'],
      {
        queryParams: {
          cp: this.codePostal,
          ville: this.ville
        }
      }
    )
  }
}
