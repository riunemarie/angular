import { Component, input, output } from '@angular/core';
import { Produit } from '../../../models/produit'; 
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { add } from '../../../stores/cart/cart.action';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class ProduitComponent {
  produit = input.required<Produit>()
  qteCommandee: number = 0
  onSendQuantity = output<void>()
  isDisabled = false
  constructor(private store: Store) { }
  ajouterPanier() {
    if (this.qteCommandee > 0 && this.qteCommandee <= this.produit().quantite) {
      this.store.dispatch(add({ lc: { produit: this.produit(), qteReservee: this.qteCommandee } }))
      this.onSendQuantity.emit()
      this.isDisabled = true
    } else {
      alert("Merci de modifier la quantité")
    }

  }
}
