import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { PostService } from '../../app/http-services/post.service';
import { Post } from '../../app/post-component/post.model';
import { Comment } from '../../app/post-component/comment.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  post: Post = new Post();
  comments: Comment[];
  formComments: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postService: PostService,
    fb: FormBuilder
  ) {
    this.formComments = fb.group({
      commentMessage: ['', Validators.maxLength(64)]
    })
  }

  ngOnInit() {
    let id = this.navParams.get('postId');
    this.postService.getPost(id).subscribe((post: Post) => {
      this.post = post;
    });

    this.postService.getAllComments(id).subscribe((comments: Comment[]) => {
      this.comments = this.sortComments(comments);
    });
  }

  addComment() {
    const comment: Comment = new Comment();
    comment.id =  Math.random(); //TODO remover 
    comment.date = new Date();
    comment.message = this.formComments.get('commentMessage').value;
    comment.post = this.post;
    comment.user = { // TODO criar Classe User e pegar o user logado
      name: "Morgana",
      id: 1,
      email: "morgana@email.com",
      image: "https://www.mobafire.com/images/avatars/morgana-bewitching.png"
    }

    if(!comment.message){
      return;
    }

    this.postService.addComment(this.post.id.toString(), comment).subscribe((comment) => {
      let comments = [...this.comments, comment];
      this.comments = this.sortComments(comments);

      this.formComments.reset();
    });
  }

  sortComments(comments: Comment[]): Comment[] {
    return comments.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1
      }
      return 0;
    }).reverse();
  }

  ionViewWillEnter() {
    
  }

}
