import { Post } from "./post.model";

export class Comment {
  public id: number;
  public user: any;
  public post: Post;
  public message: string;
  public date: Date;
}