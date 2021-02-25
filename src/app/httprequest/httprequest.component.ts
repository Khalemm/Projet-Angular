import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.scss']
})
export class HttprequestComponent implements OnInit {

  @Input("postEditing") set postEditing(post: Post) {
    //TODO: on met à jour les valeurs du formulaire
  };
  @Output() onPostCreated: EventEmitter<Post>;

  postForm: FormGroup;

  constructor() {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  }


