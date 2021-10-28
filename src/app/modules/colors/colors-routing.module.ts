import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPageComponent } from './pages/color-page/color-page.component';

const routes: Routes = [
  {
    path:'',
    component: ColorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule { }
