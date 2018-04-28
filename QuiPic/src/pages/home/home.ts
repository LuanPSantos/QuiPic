import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostService } from '../../app/http-services/post.service';
import { Post } from '../../app/post-component/post.model';
import { NewPostPage } from '../new-post/new-post';
import { CommentsPage } from '../comments/comments';

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
      this.posts = this.sortPosts(posts);
    });
  }

  ngOnInit() {
  }

  openNewPost(){
    this.navCtrl.push(NewPostPage);
  }

  onCommentsClick(postId){
    this.navCtrl.push(CommentsPage, {postId: postId});
  }

  sortPosts(posts: Post[]): Post[] {
    return posts.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1
      }
      return 0;
    }).reverse();
  }
}
