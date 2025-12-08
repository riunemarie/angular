import { createReducer, on } from "@ngrx/store";
import { CartState } from "./cart.state";
import { add, decrementQuantity, incrementQuantity, remove } from "./cart.action";



const initial: CartState = { lignes: [] }


export const cartReducer = createReducer(
    initial,
    on(add, (state, { lc }) => {
        const lcs = [...state.lignes, lc]
        return ({ ...state, lignes: lcs })
    }),
    on(remove, (state, { nom }) => {
        return ({ ...state, lignes: state.lignes.filter(lc => lc.produit.nom != nom) })
    }),
    on(incrementQuantity, (state, { nom }) => {
        const result = state.lignes.map(lc => {
            return lc.produit.nom == nom ?
                { ...lc, qteReservee: lc.qteReservee + 1 } :
                lc
        })
        return ({ ...state, lignes: result })
    }),
    on(decrementQuantity, (state, { nom }) => {
        const result = state.lignes.map(lc => {
            return lc.produit.nom == nom ?
                { ...lc, qteReservee: lc.qteReservee - 1 } :
                lc
        })
        const i = result.findIndex(lc => lc.produit.nom == nom)
        if (result[i].qteReservee == 0) {
            result.splice(i, 1);
        }
        return ({ ...state, lignes: result })
    })

)