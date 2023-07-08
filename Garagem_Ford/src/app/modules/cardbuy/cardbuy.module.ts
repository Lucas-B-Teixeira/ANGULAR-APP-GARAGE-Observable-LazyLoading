import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardbuyRoutingModule } from './cardbuy-routing.module';
import { CardbuyComponent } from './cardbuy/cardbuy.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardbuyComponent
  ],
  imports: [
    CommonModule,
    CardbuyRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CardbuyModule { }
