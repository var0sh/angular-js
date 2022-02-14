import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: [any];
  error: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPots()
    .subscribe(response => {
      this.posts = <[any]>response;
    },
    error => {
      this.error = error;
    })
  }

  creatPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    input.value = '';

    this.postService.creatPost(post)
    .subscribe((response: any) => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
    })
  }

  updatePost(post: any) {
    post.title = 'updated';

    this.postService.updatePost(post)
    .subscribe(response => {
      console.log(response);
    });
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({
    //   title: 'updated'
    // }));
  }

  deletePost(post: any) {
    this.postService.deletePost(post)
    .subscribe(response => {
      console.log(post.id);

      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);

    },
    error => {
      this.error = error;
    })
  }

}
