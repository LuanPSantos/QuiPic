import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../app/post-component/post.model';
import { PostService } from '../../app/http-services/post.service';

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
    private postService: PostService
  ) {
  }

  ionViewDidLoad() {
    
  }

  post(){
    let post = new Post();
    post.image = this.url;
    post.date = new Date();
    post.commentsCount = 0;
    post.id = Math.random();
    post.likes = 0;
    post.user = { // TODO criar Classe User e pegar o user logado
      name: "Morgana",
      id: 1,
      email: "morgana@email.com",
      image: "https://www.mobafire.com/images/avatars/morgana-bewitching.png"
    };

    this.postService.addPost(post).subscribe((ret) => {
      this.navCtrl.pop();
    });
  }
}
