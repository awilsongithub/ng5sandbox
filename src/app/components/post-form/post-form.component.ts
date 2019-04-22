import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"]
})
export class PostFormComponent implements OnInit {

  // create new event emitter called newPost
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post; // now a prop of this component
  @Input() isEdit: boolean; // prop from posts
  
  constructor(private postService: PostService) {}

  ngOnInit() {}

  addPost(title, body) {
    if (!title || !body) {
      alert("please add post");
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        debugger;
        this.newPost.emit(post); // emit event containing post 
      });
    }
  }

  updatePost() {
    console.log('from updatepost in form c .ts', this.currentPost)

    // TODO JSON PLACEHOLDER REQUESTS FAILING
    // this.postService.updatePost(this.currentPost).subscribe(post => {
    //   console.log(post);
    //   this.isEdit = false;
    //   this.updatedPost.emit(post); // emit this event to parent 
    // })

    let notFromServer = {
      title: this.currentPost.title,
      body: this.currentPost.body,
      id: 5
    }
    this.updatedPost.emit(notFromServer);

  }
}
