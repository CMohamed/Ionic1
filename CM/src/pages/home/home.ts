import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts = {
    name : 'Mohamed',
    email: 'chadad.mohamed@gmail.com',
    Tel : '0672078647',
    photo:'assets/imgs/CMNasser.jpg'
  }

  constructor(public navCtrl: NavController) {

  }

}
