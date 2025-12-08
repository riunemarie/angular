import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';

import { NotFoundComponent } from './components/not-found/not-found';
import { FormulaireSimpleComponent } from './components/formulaire-module/formulaire-simple/formulaire-simple';
import { FormulaireReactifComponent } from './components/formulaire-module/formulaire-reactif/formulaire-reactif';
import { FormulaireBuilderComponent } from './components/formulaire-module/formulaire-builder/formulaire-builder';
import { FormulaireSignalComponent } from './components/formulaire-module/formulaire-signal/formulaire-signal';
import { PersonneComponent } from './components/personne-module/personne/personne';

import { PersonneDetailsComponent } from './components/personne-module/personne-details/personne-details';
import { TableauComponent } from './components/routage-module/tableau/tableau';
import { AdresseComponent } from './components/routage-module/adresse/adresse';
import { CalculComponent } from './components/routage-module/calcul/calcul';
import { StagiaireComponent } from './components/routage-module/stagiaire/stagiaire';
import { ObservableComponent } from './components/reactive-module/observable/observable';
import { SubjectComponent } from './components/reactive-module/subject/subject';
import { ComputedComponent } from './components/reactive-module/computed/computed';
import { CalculetteComponent } from './components/formulaire-module/calculette/calculette';
import { CommentComponent } from './components/formulaire-module/comment/comment';
import { PereComponent } from './components/interaction-module/pere/pere';
import { PrimeurComponent } from './components/interaction-module/primeur/primeur';
import { PanierComponent } from './components/interaction-module/panier/panier';
import { ParentComponent } from './components/interaction-module/parent/parent';
import { ClavierComponent } from './components/interaction-module/clavier/clavier';
import { PaysComponent } from './components/interaction-module/pays/pays';
import { ContainerComponent } from './components/interaction-module/container/container';
import { TchatComponent } from './components/interaction-module/tchat/tchat';
import { AuthComponent } from './components/auth/auth';
import { authGuard } from './guards/auth-guard';

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
    { path: 'signal-form', component: FormulaireSignalComponent },
    { path: 'comment', component: CommentComponent },
    { path: 'personne', component: PersonneComponent, canActivate: [authGuard] },
    { path: 'personne/:id', component: PersonneDetailsComponent, canActivate: [authGuard] },
    { path: 'pere', component: PereComponent },
    { path: 'primeur', component: PrimeurComponent },
     { path: 'panier', component: PanierComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'clavier', component: ClavierComponent },
    { path: 'pays', component: PaysComponent },
    { path: 'container', component: ContainerComponent },
    { path: 'tchat', component: TchatComponent },
    { path: 'auth', component: AuthComponent },
    // à placer en dernier
    // { path: '**', component: NotFoundComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },

];
