import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Post } from "../post/post";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Post;

  constructor() {

  }
}
