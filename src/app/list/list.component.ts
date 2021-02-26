import { Component, Input, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';
import { PostService } from '../@shared/service/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  collapsed: boolean;

  @Input() VarPost : Post;

  posts: Post[] = POSTS;

  constructor(private PostService : PostService) { }

  getItem(newItem: Post) {
    this.PostService.addPost(newItem).subscribe();
  }

  ngOnInit(): void {
    console.log("posts > ", this.posts);
    this.PostService.getPost().subscribe( (value) => this.posts = value )
  }

  addItem(item: Post){
      this.PostService.addPost(item).subscribe(post => {this.posts.push(post)})
    }

}
