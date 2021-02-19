import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  }); 

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngOnInit(): void {
  }


}
