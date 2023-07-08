import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'garagem',
    loadChildren: () => import('./modules/cards/cards.module').then(m => m.CardsModule)
  },
  {
    path:'loja',
    loadChildren: () => import('./modules/cardbuy/cardbuy.module').then(m => m.CardbuyModule)
  },
  {
    path:'carro/:id',
    loadChildren: () => import('./modules/pagecar/pagecar.module').then(m => m.PagecarModule)
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./modules/addcar/addcar.module').then(m => m.AddcarModule)
  },
  {
    path: '',
    redirectTo: '/garagem',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./modules/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
