import { Injectable } from '@angular/core';
//When a new subscriber listens for data, it sends everything from the beginning of its life.
// This will ensure that we do not miss any old data.
import {ReplaySubject} from 'rxjs';
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  posts: ReplaySubject<{}> = new ReplaySubject<{}>()
  constructor() {
    console.log('Hello Data Provider');
  }

  get Posts() {
    return this.posts
  }

  addPost(posts) {
    return this.posts.next(posts)
  }
  

}
