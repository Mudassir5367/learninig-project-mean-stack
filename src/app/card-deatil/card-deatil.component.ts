import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-deatil',
  templateUrl: './card-deatil.component.html',
  styleUrls: ['./card-deatil.component.scss'],
})
export class CardDeatilComponent implements OnInit {
  id: any;
  post: any;
  comments: any[] = [];
  public isComments:boolean = false;
  constructor(
    private service: MainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getPostById(this.id).subscribe((post: any) => {
      this.post = post;
      console.log(post);
    });
    this.service.getComments(this.id).subscribe((comments: any) => {
      this.comments = comments;
      console.log(this.comments);
    });
  }
  commentsData() {
    this.isComments =!this.isComments;
    this.router.navigate([`/detail/${this.id}/comments`]); 
  }
}
