import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MyTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tab',
  templateUrl: 'my-tab.html'
})
export class MyTabPage {

  tab2Root = 'Tab2Page'
  tab3Root = 'Tab3Page'
  tab4Root = 'Tab4Page'
  tab5Root = 'Tab5Page'
  tab6Root = 'Tab6Page'


  constructor(public navCtrl: NavController) {}

}
