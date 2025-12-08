import { createAction, props } from "@ngrx/store";
import { LigneCommande } from "../../models/ligne-commande";



export const add = createAction('[Cart] Add', props<{ lc: LigneCommande }>())
export const remove = createAction('[Cart] Remove', props<{ nom: string }>())
export const incrementQuantity = createAction('[Cart] IncrementQ', props<{ nom: string }>())
export const decrementQuantity = createAction('[Cart] DecrementQ', props<{ nom: string }>())