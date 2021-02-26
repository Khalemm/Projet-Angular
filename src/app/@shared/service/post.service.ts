import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from '../models/post';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPost() : Observable<any> {
    return this.httpClient.get<Post[]>(`https://crudcrud.com/api/8297e84f6ce64ce2aef90201644b29fa/posts`);
  }

  addPost(post: Post) : Observable<Post> {
    return this.httpClient.post<Post>(`https://crudcrud.com/api/8297e84f6ce64ce2aef90201644b29fa/posts`, post);
  }

  delete(postId: string) {
    return this.httpClient.delete(`https://crudcrud.com/api/8297e84f6ce64ce2aef90201644b29fa/posts/${postId}`);
  }

  edit(postId: number, postEdited: Post) {
    //NOTE: postEdited ne doit pas avoir de propriété _id, l'api de crudcrud.com ne l'autorise pas avec le PUT
    //NOTE: si besoin de supprimer la propriété => delete postEdited._id
    return this.httpClient.put(`https://crudcrud.com/api/8297e84f6ce64ce2aef90201644b29fa/posts/${postId}`, postEdited);
  }

}