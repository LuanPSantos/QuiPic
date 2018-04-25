import { Component, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {

  @Input()
  post: Post;

  isLiked: boolean = false;
  likeColor: string = 'dark';

  constructor() {
    
  }

  ngOnInit(){

  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likeColor = this.isLiked ? 'danger' : 'dark';
    //mudar para backend
    this.isLiked ? this.post.likes += 1 : this.post.likes -= 1;
  }
}

