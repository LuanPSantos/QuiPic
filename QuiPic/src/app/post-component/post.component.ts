import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { NavController } from 'ionic-angular';
import { CommentsPage } from '../../pages/comments/comments';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {

  @Input()
  post: Post;
  @Output()
  commentsClick: EventEmitter<any> = new EventEmitter();
  @Output()
  nameClick: EventEmitter<any> = new EventEmitter();

  isLiked: boolean = false;
  likeColor: string = 'dark';

  constructor(private navCtrl: NavController) {
    
  }

  ngOnInit(){

  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likeColor = this.isLiked ? 'danger' : 'dark';
    //mudar para backend
    this.isLiked ? this.post.likes += 1 : this.post.likes -= 1;
  }

  openComments(){
    this.commentsClick.emit(this.post.id);
  }

  onNameClick(){
    this.nameClick.emit(this.post.user.id);
  }
}

