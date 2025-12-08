import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";

// reducers : modifient l'état
// sélecteurs : ne modifient pas l'état

export const selectCartState = createFeatureSelector<CartState>('cart')

export const selectLignes = createSelector(
    selectCartState,
    (state) => state.lignes
)

export const selectNombreProduit = createSelector(
    selectCartState,
    (state) => state.lignes.length
)

export const selectQuantiteTotale = createSelector(
    selectCartState,
    (state) => state.lignes.map(lc => lc.qteReservee).reduce((p, c) => p + c, 0)
)