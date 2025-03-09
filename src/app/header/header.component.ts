import { Component } from '@angular/core';
import { LocalStorageService } from '../localStorage-service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isLoggedIn:boolean = false;
  constructor(
    private storageService:LocalStorageService,
    private route:Router,

  ){}
  ngOnInit(){
    this.isLoggedIn = this.storageService.getItem<boolean>('userId') ?? false;
  }

  Logout(){
    this.storageService.clear()
    this.route.navigate(['/'])
    this.isLoggedIn = false;
  }
}
