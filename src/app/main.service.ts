import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
   url = "https://jsonplaceholder.typicode.com/posts"
   url1 = "http://localhost:3000/api/register"
   getPosts() {
     return this.http.get(this.url)
   }
   getPostById(id:number){
     return this.http.get(`${this.url}/${id}`)
   }
   getComments(id:number){
    return this.http.get(`${this.url}/${id}/comments`)
   }
  //  registerUser(user: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post(this.url1, user, { headers });
  // }

}
