import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DashbordPage } from '../dashbord/dashbord';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabHome: any;
  tabDashbord: any;
  tabConf: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.tabHome = HomePage;
      this.tabDashbord = DashbordPage;
      this.tabConf = SettingsPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
