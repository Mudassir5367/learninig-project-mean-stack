import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  posts:any[] = [];
constructor(
  private service:MainService,
  private route:Router
){}
ngOnInit(){
  this.service.getPosts().subscribe((post:any)=>{
    this.posts = post;
    // console.log(post);    
  })
}
showSingleCard(id:number){
  console.log(id);
  this.route.navigate(['/detail/'+id])

  
}
}
