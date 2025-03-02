import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage-service/local-storage.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  posts:any[] = [];
  public isLoggedIn:boolean = false;
constructor(
  private mainSrvice:MainService,
  private route:Router,
  private storageService:LocalStorageService
){}
ngOnInit(){
  this.mainSrvice.getPosts().subscribe((post:any)=>{
    this.posts = post;
    // console.log(post);   
    this.isLoggedIn = this.storageService.getItem<boolean>('userId') ?? false;
  })
}
showSingleCard(id:number){
  console.log(id);
  this.route.navigate(['/detail/'+id])  
}
Logout(){
  this.storageService.clear()
  this.route.navigate(['/'])
  this.isLoggedIn = false;
}
}
