import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { MainpageComponent } from './mainpage/mainpage.component';




@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MainpageComponent
  ]
})
export class SharedModule { }
