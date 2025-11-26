import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//config globale d'une application angular
export const appConfig: ApplicationConfig = {
  //fournisseurs
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
