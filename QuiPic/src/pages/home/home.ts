import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../../app/http-services/post.service';
import { Post } from '../../app/post/post.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: Post[] = [];

  constructor(public navCtrl: NavController, private postService: PostService) {

  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
