import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './stores/cart/cart.reducer';
import { counterReducer } from './stores/counter/counter.redurcer';

// la configuration globale d'une application Angular

export const appConfig: ApplicationConfig = {
  // fournisseurs
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'cart', reducer: cartReducer }),
  ]
};
