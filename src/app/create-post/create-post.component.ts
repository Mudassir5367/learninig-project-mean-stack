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
  public error:string = '';
  public msg:string = '';

  constructor(
    private fb: FormBuilder,
    private mainService:MainService,
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
      const data = this.formData.value;
      
      this.mainService.dataToBackend(data).subscribe(
        (res: any) => {          
          if (res.success === false) {
            this.error = res.msg || 'An error occurred';
            return; 
          }
          this.router.navigate(['/timeline']);
        },
        (error) => {
          console.error('Error response:', error);
          
          // Handle HTTP errors properly
          if (error.status === 400 || error.status === 401) {
            this.error = error.error?.msg || 'Invalid request';
          } else {
            this.error = 'Something went wrong. Please try again.';
          }
        }
      );
    } else {
      console.log('Form is invalid');
      this.error = 'Please fill all required fields correctly.';
    }
  }
}
