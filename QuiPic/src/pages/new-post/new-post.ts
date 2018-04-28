import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../app/post-component/post.model';
import { PostService } from '../../app/http-services/post.service';
import { TempUtil } from '../../app/models/temp.util';
import { StorageServie } from '../../app/http-services/storage.service';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  url: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private postService: PostService,
    private storageService: StorageServie
  ) {
  }

  ionViewDidLoad() {
    
  }

  post(){
    let post = new Post();
    post.image = this.url;
    post.date = new Date();
    post.commentsCount = 0;
    post.id = new TempUtil().createId();
    post.likes = 0;
    post.user = this.storageService.getUser();

    this.postService.addPost(post).subscribe((ret) => {
      this.navCtrl.pop();
    });
  }
}
