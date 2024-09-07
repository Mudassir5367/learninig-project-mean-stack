import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData!:FormGroup

  constructor(private fb:FormBuilder) { 
    this.formData = this.fb.group({
      email: ['',Validators.required, Validators],
      password: ['',Validators.required],
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
