import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Post page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class Post {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Post');
  }

   post: Posts = new Posts()
  

  submit() {
    this.navCtrl.parent.select(0)
  }

}

class Posts{
  title: string
  body: string
  id: string

  constructor() {}
}
