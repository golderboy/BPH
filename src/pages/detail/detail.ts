import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
datas : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    this.datas = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  

}
