import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Login } from '../Shared/Models/Login';
import { AccountService } from '../Core/Services/account.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:Login = {email: '', password: ''}
  loginForm: FormGroup
  submitted:boolean = false
  loginError:boolean = false
  loginErrorMessage:string

  constructor(private fb:FormBuilder, private router:Router, private accountService:AccountService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  get LoginFormControl(){
    return this.loginForm.controls
  }

  Login(){
    if(this.loginForm.valid){
      this.loginData.email = this.LoginFormControl['email'].value
      this.loginData.password = this.LoginFormControl['password'].value
      this.accountService.login(this.loginData).subscribe(
        (response:boolean) => { //Success callback
        this.router.navigateByUrl('/')
      },
        (err: HttpErrorResponse) => { //Error callback
          this.loginError = true
          this.loginErrorMessage = err.error.Message
        }
      )
    }
  }
}
