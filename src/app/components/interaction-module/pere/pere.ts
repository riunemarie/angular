import { AfterViewInit, Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { FilsComponent } from '../fils/fils';

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent implements OnInit, AfterViewInit {


  @ViewChild(FilsComponent) fils!: FilsComponent
  // Angular 19
  // fils = viewChild(FilsComponent)
  nom = 'John Wick'
  maVille = 'Marseille'

  ngOnInit(): void {
    // exécuté pendant l'initialisati
    console.log(this.fils);
  }
  ngAfterViewInit(): void {
    console.log(this.fils);
  }

  premierEnfant() {
    console.log(this.fils);
    console.log(this.fils.ville());

  }
  tousLesEnfants() {
   // this.fils().forEach(f => console.log(f.ville()))
     console.log(this.fils.ville());
  }
}
