import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagecarComponent } from './pagecar/pagecar.component';


const routes: Routes = [
  { 
    path: '',
    component: PagecarComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagecarRoutingModule { }
