import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostService } from '../../app/http-services/post.service';
import { Post } from '../../app/post-component/post.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  posts: Post[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private postService: PostService
  ) {
  }

  ionViewWillEnter () {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit() {

  }
}
