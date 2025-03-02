import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MainService } from '../main.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
formData!:FormGroup

  constructor(
    private fb:FormBuilder,
    private service:MainService,
    private http:HttpClient,
    private router:Router

  ) { 
    this.formData = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      // phone: ['', Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      // confirmPassword: ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.formData.invalid){
      return
    }else{
      this.formData = this.formData?.value
    this.service.registerUser(this.formData).subscribe((res)=>{
      this.router.navigate(['/login'])
      console.log('res',res);      
    })
    }
  }
}
