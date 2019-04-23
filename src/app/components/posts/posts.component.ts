import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/Post";
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  emptyPost: Post = {
    id: 0,
    title: "", 
    body: ""
  }
  currentPost: Post = this.emptyPost; // initialize to empty

  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach( (cur, index) => {
      if(cur.id === post.id){
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = this.emptyPost;
      }
    })  
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  removePost(post: Post) {
    if(confirm('are you sure')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach( (cur, index) => {
          if(cur.id === post.id){
            this.posts.splice(index, 1);
          }
        }) 
      });
    }
  }

} // end of class 
