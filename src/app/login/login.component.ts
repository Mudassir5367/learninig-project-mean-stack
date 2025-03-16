import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage-service/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData! :FormGroup

  constructor(
    private fb:FormBuilder,
    private mainService:MainService,
    private router:Router,
    private storageService:LocalStorageService
  ) { 
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required],
    })
  }
  onSubmit(){
    if(this.formData.invalid){
      return
    }else{
      const formValue = this.formData.value
      this.mainService.login(formValue).subscribe((res:any)=>{
        console.log('login', res);

        if(res.success == true){
          this.storageService.setItem('fulname',res.fullname);
          this.storageService.setItem('username',res.username);
          this.storageService.setItem('userId',res._id);
          this.storageService.setItem('token',res.token);
          this.router.navigate(['/'])
          window.location.reload(); 
        }else{
          this.router.navigate(['/login'])
        }
        
      })
      console.log(formValue);
      
    }
  }
}
