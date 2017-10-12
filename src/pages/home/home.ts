import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController  } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AvatarProvider } from '../../providers/avatar/avatar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:string;
  app = "โปรแกรม BPH ทดสอบ V1.0";
  age = "20";
  sex:number;
  birth:Date;
  avatars = [];

  xxx = ['AAA','BBB','CCC'];
  data = [
    {id:1,name: 'Mr.AAA ',age: 20},
    {id:2,name: 'Mr.BBB ',age: 30},
    {id:3,name: 'Mr.CCC ',age: 40},
  ];


  constructor(public navCtrl: NavController,public alertCtrl:AlertController
    ,private avatarPovider: AvatarProvider,public loadingCtrl: LoadingController) {

  }

  ionViewWillEnter(){
    this.getAvatars();
  }
/*
  showMe(dd:any){
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน!',
      subTitle: 'ชื่อ '+ dd.name +' อายุ '+dd.age,
      buttons: ['OK','CANCEL']
      });
      alert.present();
  }
*/
  detail(dd:any){
    this.navCtrl.push(DetailPage,dd)
  }

  async getAvatars(){
    const loading = this.loadingCtrl.create({
      content: "รอสักครู่...",
    });

    try {
      this.avatars=[];

      loading.present();
      const resp = await this.avatarPovider.getAvatar();
      this.avatars = resp.results;  
      loading.dismiss();
    } catch (error) {
      loading.dismiss();
    }



}

}
