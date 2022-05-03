import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signUpForm:FormGroup;
  message:string;
  fieldTextType:boolean;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      'name':new FormControl(null,[Validators.required,Validators.minLength(3)]), 
      'email':new FormControl(null,[Validators.email,Validators.required]), 
      'PhoneNumber':new FormControl(null,[Validators.required]),
      'birthday':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'acceptTerms':new FormControl(false,[Validators.requiredTrue])
    })
  }

  onSubmit(){
    console.log(this.signUpForm);
    // this.signUpForm.reset();
 

  }

  showHidePassword(){
    this.fieldTextType = !this.fieldTextType;

  }

}
