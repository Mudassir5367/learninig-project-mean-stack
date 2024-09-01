import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
   url = "https://jsonplaceholder.typicode.com/posts"
   getPosts() {
     return this.http.get(this.url)
   }
   getPostById(id:number){
     return this.http.get(`${this.url}/${id}`)
   }
}
