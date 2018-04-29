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

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.BASE_URL + '/posts');
  }

  getPost(id: string): Observable<Post>{
    return this.http.get<Post>(this.BASE_URL + '/posts/' + id);
  }

  getAllUserPosts(id: string):Observable<Post[]>{
    return this.http.get<Post[]>(this.BASE_URL + '/posts?user.id=' + id);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.BASE_URL + '/posts', post);
  }

  getAllComments(id: string): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.BASE_URL + '/comments?post.id='+ id);
  }

  addComment(id: string, comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(this.BASE_URL + '/comments', comment);
  }
}