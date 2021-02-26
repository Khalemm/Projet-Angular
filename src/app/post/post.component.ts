import { Component,EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Post } from '../@shared/models/post';
import { PostService } from '../@shared/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  collapsed: boolean;
  @Input() post : Post;

  @Output() deletePost = new EventEmitter<string>();

  constructor(private PostService : PostService) { }

  deleteItem(post : Post) {
    this.deletePost.emit(post._id);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

}
