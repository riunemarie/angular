import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Store } from '@ngrx/store';
import { selectNombreProduit, selectQuantiteTotale } from '../../../stores/cart/cart.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  nombreProduit$: Observable<number>
  quantiteTotale$: Observable<number>
  constructor(private store: Store) {
    this.nombreProduit$ = this.store.select(selectNombreProduit)
    this.quantiteTotale$ = this.store.select(selectQuantiteTotale)
  }
}
