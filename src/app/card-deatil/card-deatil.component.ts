import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-deatil',
  templateUrl: './card-deatil.component.html',
  styleUrls: ['./card-deatil.component.scss']
})
export class CardDeatilComponent implements OnInit{
id: any;
post:any;
constructor(
private service:MainService,
private route:ActivatedRoute
){}


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   this.service.getPostById(this.id).subscribe((post:any)=>{
    this.post = post
     console.log(post);
   })
  }

}
