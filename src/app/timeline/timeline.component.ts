import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{
public timelimePosts:any = [];
public loading:boolean = true;
  constructor(
    private mainService:MainService,
  ){}
  ngOnInit(){
    this.loading = true;
    this.mainService.getAllPosts().subscribe((res:any)=>{
      this.timelimePosts = res.data;
      this.loading = false;
      console.log('res',this.timelimePosts);
    })
  }
}
