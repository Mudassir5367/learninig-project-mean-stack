import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
formData!:FormGroup

  constructor(private fb:FormBuilder) { 
    this.formData = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['',Validators.required, Validators],
      password: ['',Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.formData.invalid){
      return
    }else{
      this.formData = this.formData?.value
      console.log(this.formData);
      
    }
  }
}
