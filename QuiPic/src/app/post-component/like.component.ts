import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from './post.model';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html'
})
export class LikeComponent {

  likeColor: string = 'dark';
  isLiked: boolean = false;

  @Input()
  post: Post;
  @Output()
  click: EventEmitter<boolean> = new EventEmitter();

  constructor(private navCtrl: NavController) {
    
  }

  ngOnInit(){

  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likeColor = this.isLiked ? 'danger' : 'dark';
    this.isLiked ? this.post.likes += 1 : this.post.likes -= 1;
    
    this.click.emit(this.isLiked);
  }
}