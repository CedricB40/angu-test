import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { ListeJeux } from './liste-jeux/liste-jeux';

export const routes: Routes = [

    { path: '', component: Accueil },
    { path: 'liste-jeux', component: ListeJeux },

];