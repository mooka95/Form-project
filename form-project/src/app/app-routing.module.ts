import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'form',loadChildren:()=>import('./Components/form-sign-up/form.module').then(m=>m.FormModule)},
  {path:'',pathMatch:'full',redirectTo:'/form'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
