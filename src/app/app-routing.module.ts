import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardDeatilComponent } from './card-deatil/card-deatil.component';

const routes: Routes = [
  {path: '', component:CardsComponent},
  {path: 'detail/:id', component:CardDeatilComponent},
  {path: 'detail/:id/comments', component:CardDeatilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
