import { createAction, props } from '@ngrx/store'


export const increment = createAction('[Counter] Increment')
export const decrement = createAction('[Counter] Decrement')
export const addBy = createAction('[Counter] AddBy', props<{ value: number }>())
export const updateSigne = createAction('[Counter] Update Signe', props<{ signe: 'positif' | 'negatif' | 'nul' }>())