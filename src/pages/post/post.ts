import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Post page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()

class Posts {
  title: string
  body: string
  id: string

  constructor() {}
}
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})

export class Post {

  post:Posts = new Posts()

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submit() {
    this.navCtrl.parent.select(0)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Post');
  }

}
