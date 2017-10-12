import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

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

  xxx = ['AAA','BBB','CCC'];
  data = [
    {id:1,name: 'Mr.AAA ',age: 20},
    {id:2,name: 'Mr.BBB ',age: 30},
    {id:3,name: 'Mr.CCC ',age: 40},
  ];


  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

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

}
