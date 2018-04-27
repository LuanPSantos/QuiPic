import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../post-component/comment.model';
import { Post } from '../post-component/post.model';

@Injectable()
export class PostService {

  BASE_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient){
  }

  getAllPosts(): Observable<any[]>{
    return this.http.get<any[]>(this.BASE_URL + '/posts');
  }

  getPost(id: string): Observable<any>{
    return this.http.get<any>(this.BASE_URL + '/posts/' + id);
  }

  addPost(post: Post): Observable<any> {
    return this.http.post<any>(this.BASE_URL + '/posts', post);
  }

  getAllComments(id: string): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.BASE_URL + '/comments?post.id='+ id);
  }

  addComment(id: string, comment: any): Observable<any>{
    return this.http.post<any>(this.BASE_URL + '/comments', comment);
  }
}