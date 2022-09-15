import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  patternValidator():ValidatorFn{
    //This validator fn is for the password field,
    // Requirments:
    // Minimum password length: 8 characters
    // Must contain at least one Uppercase letter and one Lowercase letter
    // Must contain a number
    return (control: AbstractControl) : {[key: string]: any} => {
      if(!control.value){
        return null!
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
      const valid = regex.test(control.value)
      return valid ? null! : {invalidPassword: true}
    }
  }

  matchPassword(password:string, confirmPassword:string){
    return (formGroup:FormGroup) => {
      const passwordControl = formGroup.controls['password']
      const confirmPasswordControl = formGroup.controls['confirmPassword']

      if(!passwordControl || !confirmPassword){
        return null
      }
      if(confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']){
        return null
      }

      if(passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({'passwordMismatch' : true})
      } else {
        confirmPasswordControl.setErrors(null)
      }
      return null
    }
  }

  constructor() { }
}
