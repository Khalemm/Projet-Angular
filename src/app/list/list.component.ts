import { Component, Input, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  collapsed: boolean;

  @Input() VarPost : Post;

  posts: Post[] = POSTS;

  constructor() { }

  ngOnInit(): void {
    console.log("posts > ", this.posts);
  }

  addItem(newItem: Post){
      this.posts.push(newItem);
    }

}
