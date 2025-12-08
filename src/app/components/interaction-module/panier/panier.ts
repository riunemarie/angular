import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterState } from '../../../stores/counter/counter.selector';
import { selectLignes } from '../../../stores/cart/cart.selector';
import { LigneCommande } from '../../../models/ligne-commande';
import { decrementQuantity, incrementQuantity, remove } from '../../../stores/cart/cart.action';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class PanierComponent {
  lignesCommandes: LigneCommande[] = []
  constructor(private store: Store) {
    this.store.select(selectLignes).subscribe(res => {
      this.lignesCommandes = res
    })
  }
  supprimer(nom: string) {
    this.store.dispatch(remove({ nom }))
  }
  incrementerQuantite(nom: string) {
    this.store.dispatch(incrementQuantity({ nom }))
  }
  decrementerQuantite(nom: string) {
    this.store.dispatch(decrementQuantity({ nom }))
  }
}
