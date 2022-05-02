import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormSignUpComponent } from './form-sign-up.component';
import { HeaderComponent } from './header/header.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: FormSignUpComponent },
];
@NgModule({
  declarations: [
    HeaderComponent,
    FormSignUpComponent,
    SignupFormComponent,
    AdvertisingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormModule { }
