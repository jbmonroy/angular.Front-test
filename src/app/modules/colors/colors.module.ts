import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsRoutingModule } from './colors-routing.module';
import { ColorPageComponent } from './pages/color-page/color-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ColorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ColorsRoutingModule
  ]
})
export class ColorsModule { }
