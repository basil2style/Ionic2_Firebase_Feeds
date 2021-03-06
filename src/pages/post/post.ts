import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Data } from '../../providers/data';
import { AngularFire } from "angularfire2";
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFire) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Post');
  }

   post: Posts = new Posts()
  

  submit() {
    //this._data.addPost(this.post);
    this.af.database.list('/posts').push(this.post)
    this.post = new Posts()
    this.navCtrl.parent.select(0)
  }

}

class Posts{
  title: string
  body: string
  id: string

  constructor() {}
}
