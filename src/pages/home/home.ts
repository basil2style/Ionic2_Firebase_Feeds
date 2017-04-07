import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

const data = [{
  title : 'post1',
  body : 'hi!',
  id : 0
},
{
  title : 'post2',
  body : 'hi2',
  id : 1
},{
  title : 'post3',
  body : 'hi2',
  id : 2
}]



export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
