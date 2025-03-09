import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardDeatilComponent } from './card-deatil/card-deatil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { CreatePostComponent } from './create-post/create-post.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: '', component:CardsComponent},
  {path: 'detail/:id', component:CardDeatilComponent, canActivate:[authGuard]},
  {path: 'detail/:id/comments', component:CardDeatilComponent, canActivate:[authGuard]},
  {path: 'login', component:LoginComponent, canActivate:[authGuard] },
  {path: 'signup', component:SignupComponent, canActivate:[authGuard]},
  {path: 'create-post', component:CreatePostComponent, canActivate:[authGuard]},
  {path: 'timeline', component:TimelineComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
