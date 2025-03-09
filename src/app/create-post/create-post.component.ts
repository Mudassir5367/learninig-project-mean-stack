import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  formData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mainSrvice:MainService,
    private router:Router
  ) {
    this.formData = this.fb.group({
      id: ['', Validators.required],
      // userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      const data = this.formData.value
      this.mainSrvice.dataToBackend(data).subscribe((res:any)=>{
        // console.log('data to backend',res);
        if(res.success != false)
        this.router.navigate(['/'])
      })
    } else {
      console.log('Form is invalid');
    }
  }
}
