import { Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable';
import { SubjectComponent } from './components/subject/subject';
import { ComputedComponent } from './components/computed/computed';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AdresseComponent } from './components/adresse/adresse';
import { StagiaireComponent } from './components/stagiaire/stagiaire';
import { CalculComponent } from './components/calcul/calcul';
import { TableauComponent } from './components/tableau/tableau';
import { NotFoundComponent } from './components/not-found/not-found';
import { FormulaireSimpleComponent } from './components/formulaire-simple/formulaire-simple';
import { CalculetteComponent } from './components/calculette/calculette';
import { FormulaireReactifComponent } from './components/formulaire-reactif/formulaire-reactif';
import { FormulaireBuilderComponent } from './components/formulaire-builder/formulaire-builder';

// ici on définit les routes de nos composants
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tableau/:indice', component: TableauComponent },
    { path: 'adresse', component: AdresseComponent },
    { path: 'address', redirectTo: '/adresse' },
    { path: 'calcul/:op', component: CalculComponent },
    { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
    { path: 'observable', component: ObservableComponent },
    { path: 'subject', component: SubjectComponent },
    { path: 'computed', component: ComputedComponent },
    { path: 'calculette', component: CalculetteComponent },
    { path: 'formulaire', component: FormulaireSimpleComponent },
    { path: 'reactive', component: FormulaireReactifComponent },
    { path: 'builder', component: FormulaireBuilderComponent },
    // à placer en dernier
    // { path: '**', component: NotFoundComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },

];
