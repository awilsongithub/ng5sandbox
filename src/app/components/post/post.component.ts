import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
import { Observable } from 'rxjs';

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    // snapshot of active route params, we want id
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.postService.getPost(id).subscribe(post => {
      console.log('post with that id:', post);
      this.post = post;
    })

  }
  
}
                                                                                                                                          