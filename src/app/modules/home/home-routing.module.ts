import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //TODO: Llamada a familia de rutas
  {
    path:'list',
    loadChildren: ()=>import('@modules/list/list.module').then(m=>m.ListModule)
  },
  {
    path:'avatars',
    loadChildren: ()=>import('@modules/avatars/avatars.module').then(m=>m.AvatarsModule)
  },
  {
    path:'colors',
    loadChildren: ()=>import('@modules/colors/colors.module').then(m=>m.ColorsModule)
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
