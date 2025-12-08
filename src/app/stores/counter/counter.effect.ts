import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store';
import { addBy, decrement, increment, updateSigne } from './counter.action';
import { map, withLatestFrom } from 'rxjs/operators';
import { selectValeur } from './counter.selector';
import { inject } from '@angular/core';


export class CounterEffect {
    actions$ = inject(Actions)
    store = inject(Store)
    // constructor(
    //     private actions$: Actions,
    //     private store: Store
    // ) { }

    updateSigneOnCountChange$ = createEffect(() =>
        this.actions$.pipe(
            ofType(increment, decrement, addBy), // actions qui déclenche l'effect
            withLatestFrom(this.store.select(selectValeur)), // la valeur qui déclenche la vérification du signe
            map(([_, value]) => {
                const signe = value > 0 ? 'positif' : value == 0 ? 'nul' : 'negatif'
                return updateSigne({ sign: signe})
            })
        )
    )
}