import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CustomValidatorService } from '../Core/CustomValidator/custom-validator.service';
import { Register } from '../Shared/Models/Register';
import { AccountService } from '../Core/Services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../Shared/Models/Login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData:Register = {
    email:       '',
    password:    '',
    firstName:   '',
    lastName:    '',
    dateOfBirth: null!
}
  registerForm: FormGroup
  submitted:boolean = false
  registerError:boolean = false
  registerErrorMessage:string

  constructor(private fb:FormBuilder, 
    private customValidator:CustomValidatorService, 
    private accountService:AccountService, 
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword: ['', Validators.required],
        dob: ['', Validators.required]
      },
      {
        validator: this.customValidator.matchPassword('password', 'confirmPassword'),
      }
    )
  }

  get RegisterFormControl(){
    return this.registerForm.controls
  }

  register(){
    if(this.registerForm.valid){
      this.registerData.firstName = this.RegisterFormControl['firstName'].value
      this.registerData.lastName = this.RegisterFormControl['lastName'].value
      this.registerData.email = this.RegisterFormControl['email'].value
      this.registerData.password = this.RegisterFormControl['password'].value
      this.registerData.dateOfBirth = this.RegisterFormControl['dob'].value
      this.accountService.register(this.registerData).subscribe(
        (response:boolean) => { //Success callback
          this.router.navigateByUrl('/account/login')
      },
        (err: HttpErrorResponse) => { //Error callback
          this.registerError = true
          this.registerErrorMessage = err.error
        }
      )
    }
  }

}
