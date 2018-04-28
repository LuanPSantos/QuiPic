import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServie } from '../../app/http-services/storage.service';
import { LoginPage } from '../login/login';
import { User } from '../../app/models/user.model';
import { UserService } from '../../app/http-services/user.service';
import { Post } from '../../app/post-component/post.model';
import { PostService } from '../../app/http-services/post.service';
import { CommentsPage } from '../comments/comments';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: User = new User();
  posts: Post[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storageService: StorageServie,
    private userService: UserService,
    private postService: PostService
  ) {
  }

  ngOnInit(){
    this.user = this.storageService.getUser();
  }

  ionViewWillEnter () {
   this.postService.getAllUserPosts(this.user.id.toString()).subscribe((posts)=> {
     this.posts = this.sortPosts(posts);
   });
  }

  logout(){
    this.storageService.removeUser();
    this.navCtrl.setRoot(LoginPage)
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

  openComments(id: string){
    this.navCtrl.push(CommentsPage, {postId: id});
  }

}
