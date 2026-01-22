import { Routes } from '@angular/router';
import { Componente1 } from '../componente1/componente1';
import { Componente2 } from '../componente2/componente2';
import { Componente3 } from '../componente3/componente3';
import { Componente4 } from '../componente4/componente4';
import { Componente5 } from '../componente5/componente5';
import { HarrypotterComponent } from '../harrypotter/harrypotter.component';

export const routes: Routes = [
    { path: '', component: Componente1 },
    { path: 'componente1', component: Componente1 },
    { path: 'componente2', component: Componente2 },
    { path: 'componente3', component: Componente3 },
    { path: 'componente4', component: Componente4 },
    { path: 'loquemesalgalosguebos', component: Componente5 },
    { path: 'harrypotter', component: HarrypotterComponent },
];
