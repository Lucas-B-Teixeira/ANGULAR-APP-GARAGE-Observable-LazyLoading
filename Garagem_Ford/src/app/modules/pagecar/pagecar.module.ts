import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagecarRoutingModule } from './pagecar-routing.module';
import { PagecarComponent } from './pagecar/pagecar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagecarComponent
  ],
  imports: [
    CommonModule,
    PagecarRoutingModule,
    FormsModule
  ]
})
export class PagecarModule { }
