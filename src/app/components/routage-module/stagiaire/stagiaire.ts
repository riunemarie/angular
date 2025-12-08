import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  imports: [],
  templateUrl: './stagiaire.html',
  styleUrl: './stagiaire.css',
})
export class StagiaireComponent {
  @Input() nom = ""
  @Input() prenom = ""
}
