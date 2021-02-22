import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  collapsed: boolean;
  @Input() data : Post;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

}
