import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserImpl } from 'src/app/Model/user-impl';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signUpForm:FormGroup;
  message:string;
  fieldTextType:boolean;
 user:UserImpl;
 error:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      'name':new FormControl(null,[Validators.required,Validators.minLength(3)]), 
      'email':new FormControl(null,[Validators.email,Validators.required]), 
      'PhoneNumber':new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      'birthday':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'acceptTerms':new FormControl(false,[Validators.requiredTrue])
    })
  }

  onSubmit(){
 if(this.signUpForm.valid){
  this.user=this.signUpForm.value;
  localStorage.setItem('user', JSON.stringify(this.user));
  this.message='User Registered Successfully ';
  setTimeout(()=>{                         
    this.message='';
}, 5000);
 }
 else{
   this.error=true;
   this.message='please enter valid data';
   setTimeout(()=>{                          
    this.message='';
}, 5000);

 }


    this.signUpForm.reset();
 

  }

  showHidePassword(){
    this.fieldTextType = !this.fieldTextType;

  }

}
