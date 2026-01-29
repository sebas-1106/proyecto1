import { Routes } from '@angular/router';

import { Componente8 } from '../componente8/componente8';
import { Componente7 } from '../componente7/componente7';
import { Componente1 } from '../componente1/componente1';
import { Componente2 } from '../componente2/componente2';
import { Componente3 } from '../componente3/componente3';
import { Componente4 } from '../componente4/componente4';
import { Componente5 } from '../componente5/componente5';
import { HarrypotterComponent } from '../harrypotter/harrypotter.component';
import { Harryandhijos } from '../harryandhijos/harryandhijos';
import { Yosoytupadre } from '../yosoytupadre/yosoytupadre';
import { Lukeskywalker } from '../lukeskywalker/lukeskywalker';
import { Starwars } from '../starwars/starwars';
export const routes: Routes = [
    { path: '', component: Componente1 },
    { path: 'componente1', component: Componente1 },
    { path: 'componente2', component: Componente2 },
    { path: 'componente3', component: Componente3 },
    { path: 'componente4', component: Componente4 },
    { path: 'componente5', component: Componente5 },
    {path:  'componente7', component: Componente7},
    {path:  'componente8', component: Componente8},
    { path: 'harrypotter', component: HarrypotterComponent },
    { path: 'harryandhijos', component: Harryandhijos },
    { path: 'yosoytupadre', component: Yosoytupadre },
    { path: 'lukeskywalker', component: Lukeskywalker},
    { path: 'starwars', component: Starwars},
    
];
