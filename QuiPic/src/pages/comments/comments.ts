import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostService } from '../../app/http-services/post.service';
import { Post } from '../../app/post-component/post.model';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  post: Post = new Post();
  comments: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private postService: PostService
  ) {
  }

  ngOnInit(){
    let id = this.navParams.get('postId');
    this.postService.getPost(id).subscribe((post) => {
      this.post = post;
    });

    this.postService.getAllComments(id).subscribe((comments) => {
      this.comments = comments;
    });
  }

  ionViewWillEnter () {
    console.log('CommentsPage');
  }

}
