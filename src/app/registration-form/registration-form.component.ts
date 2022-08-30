import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControlOptions,  } from '@angular/forms';
import { passwordValidator } from './password-validator';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  model = new Register('','',0,'','');
  submitted = false;
  
  registrationForm = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(4)]],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['',[Validators.required]],
    confpassword:['',[Validators.required,passwordValidator]],
    check: [''],
    number: ['']
  },{validator: passwordValidator} as AbstractControlOptions);
  onSubmit(){
    this.submitted = true;
  }
  get name(){
    return this.registrationForm.get('name');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get confpassword(){
    return this.registrationForm.get('confpassword');
  }
  get check(){
    return this.registrationForm.get('check');
  }
  get number(){
    return this.registrationForm.get('number');
  }
  
}
