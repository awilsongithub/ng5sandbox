import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: "root"
})

export class PostService {
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    // .get(url) evaluates to what is returned
    // we return what is returned
    // so the invocation in component gets the data 
    // http code is abstracted from component 
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
}
