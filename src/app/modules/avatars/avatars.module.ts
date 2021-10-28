import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarsRoutingModule } from './avatars-routing.module';
import { AvatarPageComponent } from './pages/avatar-page/avatar-page.component';


@NgModule({
  declarations: [
    AvatarPageComponent
  ],
  imports: [
    CommonModule,
    AvatarsRoutingModule
  ]
})
export class AvatarsModule { }
