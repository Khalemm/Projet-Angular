import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Post } from '../@shared/models/post';
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  @Output() createPost = new EventEmitter<Post>();

  profileForm = new FormGroup({
    title: new FormControl(''),
    link: new FormControl(''),
    description: new FormControl(''),
  }); 

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    const post:Post = {
      id: IdGeneratorUtils.uuidv4(),
      title : this.profileForm.get("title").value,
      link : this.profileForm.get("link").value,
      description: this.profileForm.get("description").value
      }
      this.createPost.emit(this.profileForm.value); // transferer les data de la classe fille à la classe parent
      this.profileForm.reset();
  }

  ngOnInit(): void {
  }


}
