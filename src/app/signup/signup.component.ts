import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MainService } from '../main.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    private http:HttpClient

  ) { 
    this.formData = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.formData.invalid){
      return
    }else{
      this.formData = this.formData?.value
      this.http.post('http://localhost:5002/api/register', this.formData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      // console.log(this.formData);
      
    })
    }
  }
}
