import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyTabPage } from '../my-tab/my-tab';
import { Page2Page } from '../page2/page2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  page() {
  	this.navCtrl.push(MyTabPage) ;
  }
  page2() {
  	this.navCtrl.push(Page2Page) ;
  }
}
