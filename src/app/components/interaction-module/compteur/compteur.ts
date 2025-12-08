import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBy, decrement, increment } from '../../../stores/counter/counter.action';
import { selectSigne, selectValeur } from '../../../stores/counter/counter.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compteur',
  imports: [CommonModule, FormsModule],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {
  valeur = 0
  val = 0
  signe = 'nul'
  // valeur$: Observable<number>
  constructor(private store: Store) {
    store.select(selectValeur).subscribe(v => this.valeur = v)
    store.select(selectSigne).subscribe(s => this.signe = s)
    // this.valeur$ = store.select(selectValeur)
  }
  incrementer() {
    this.store.dispatch(increment())
  }
  decrementer() {
    this.store.dispatch(decrement())
  }
  ajouter() {
    this.store.dispatch(addBy({ value: this.val }))
  }
}
