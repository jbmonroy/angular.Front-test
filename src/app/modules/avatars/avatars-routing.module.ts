import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarPageComponent } from './pages/avatar-page/avatar-page.component';

const routes: Routes = [
  {
    path:'',
    component:AvatarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvatarsRoutingModule { }
