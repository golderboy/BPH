import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvatarProvider } from '../../providers/avatar/avatar';

@IonicPage()
@Component({
  selector: 'page-dashbord',
  templateUrl: 'dashbord.html',
})
export class DashbordPage {

  avatars = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private avatarPovider: AvatarProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashbordPage');
  }



}
