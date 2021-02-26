
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input("postEditing") set postEditing(post: Post) {
    //TODO: on met à jour les valeurs du formulaire
  };
  @Output() onSubmit: EventEmitter<Post>;

  profileForm = new FormGroup({
    title :new FormControl(''),
    link : new FormControl('')
  });

  constructor() {
    this.onSubmit = new EventEmitter();
    this.profileForm;
  }

  ngOnInit() {
  }

  createPost() {
    const post:Post = {
      title : this.profileForm.get("title").value,
      link : this.profileForm.get("link").value
    }
    this.onSubmit.emit(this.profileForm.value);
  }
}
