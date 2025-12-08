import { Component } from '@angular/core';
import { CompteurComponent } from "../interaction-module/compteur/compteur";

@Component({
  selector: 'app-home',
  imports: [CompteurComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}
