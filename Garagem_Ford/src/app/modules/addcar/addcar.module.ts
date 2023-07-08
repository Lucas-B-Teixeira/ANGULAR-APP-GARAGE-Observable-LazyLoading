import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcarRoutingModule } from './addcar-routing.module';
import { AddcarComponent } from './addcar/addcar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddcarComponent
  ],
  imports: [
    CommonModule,
    AddcarRoutingModule,
    FormsModule
  ]
})
export class AddcarModule { }
