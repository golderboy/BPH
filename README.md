การติดตั้ง Ionic
1. ลง Node.js
2. รันคำสั้ง  npm install ionic cornova -g
3. ติดตั้ง Android Studio
4. กำหนด evorution path ในส่วน user ใหม่
    4.1 ANDROID_HOME = C:\Users\ชื่อเครื่อง\AppData\Local\Android\sdk
    4.2 JAVA_HOME = C:\Program Files\Java\jdk1.8.0_131
    4.3 เพิ่ม PATH = ;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

เริ่มสร้างโปรเจค
1. สร้างโฟร์เดอร์โปรเจค
2. รัน cmd ที่โพร์เดอร์งาน
3. รันคำสั้ง ionic start
    3.1 สร้างชื่อโปรเจค 
    3.2 เลือกเทมเพลด 
        3.2.1 tab = มีแทบ
        3.2.2 blank = โปรเจคเปล่า
        3.2.3 super = ครบทุกอย่าง
4. รอ

การติดตั้ง ปลั๊กอิน visual Studio Code
1. เปิด visual Studio Code เพิ่มปลั๊กอิน 
    1.1 Angular v4 TypeScript Snippets
    1.2 Ionic 3 ionView Snippets By.Daniel
    1.3 Ionic 3 Snippets By.Satip Rianpit
    1.4 JavaScript(ES6) code Snippets
    1.5 Material Icon Theme
    1.6 npm instellisense
    1.7 path Intellisense

เริ่มต้น Ionic <root folder>
<root folder>
    -hook
    -node_modules
    -resources
    -platforms เก็บโปรแกรมที่บิ้วแล้วเป็น ios หรือ android 
    -src โค้ดที่ใช้งาน
        -app
            -app.component.ts ไฟล์ JavaScript
            -app.html ไฟล์เทมเพลด
            -app.modules.ts ไฟล์โมดูลแอฟ
            -app.scss  ไฟล์ css
        -assets ไว้เก็บไฟล์รูปภาพ ไฟล์ต่างๆ 
        -pages
            -home หน้าเพจ
                -home.html หน้าเพจ
                -home.scss เก็บ css
                -home.ts เก็บ JavaScript
        -theme เก็บข้อมูลเทมเพลด
            -variables.scss เก็บค่าการจัดการเทมเพลด 
        -index.html ไฟล์แสดงผลหลัก
    -www โปรแกรมที่บิ้วแล้ว


การทดสอบโปรแกรม
1. เข้า cmd ไปที่ folder โปรเจค
2. รันคำสั่ง ionic serve -l #บิ้วโปรเจค
3. เตรียมโปรเจคไว้สำหรับ Android Studio รันคำสั่ง ionic cordova prepare android
    3.1 ไฟล์จะอยู่ที่โฟร์เดอร์ platforms ->android หรือ ios แล้วแต่ที่เราสร้าง

การทดสอบโปรแกรมบนมือถือ
1. เปิดโหมดผู้พัฒนาในมือถือ
2. ต่อสายพ่วงมือถือ+ลงไดร์เวอร์
3. เปิด cmd รันคำสั่ง adb devices -l เพื่อตรวจสอบการเชื่อมต่อ
4. เปิด cmd ที่โพร์เดอร์งาน รัน ionic cordova platform add android
5. เปิด cmd ที่โพร์เดอร์งาน รัน ionic cordova run android --device
*** Ios ****
6. เปิด cmd ที่โพร์เดอร์งาน รัน ionic cordova platform add ios
7. เปิด cmd ที่โพร์เดอร์งาน รัน ionic cordova emulate ios
    7.1 หรือ เปิด cmd ที่โพร์เดอร์งาน รัน ionic cordova build ios

8.การสร้าง app เพื่อให้อยู่ในมือถือ รันคำสั่ง ionic cordova run android --device --aot --prod

การประกาศตัวแปร และ เรียกใช้
-สร้างตัวแปรต่างๆที่ pages->หน้าที่จะแสดง->page.ts
    - ให้สร้างตัวแปรภายใต้ Class
```bash
        Class export class หน้าที่จะแสดง {
            name:string;
            age = "20";
            sex:number;
            birth:Date;

            Lists = ['AAA','BBB','CCC'];
            data = [
                {id:1,name: 'Mr.AAA ',age: 20},
                {id:2,name: 'Mr.BBB ',age: 30},
                {id:3,name: 'Mr.CCC ',age: 40},
            ];
        }
```
-การเประกาศแสดงค่าตัวแปร {{ ตัวแปร }}

การสร้าง Input ต่างๆ
```bash
//InPut กรองข้อมูลทั่วไป
    <ion-item>
    <ion-label floating>ชื่อ</ion-label>
    <ion-input type="text" [(ngModel)]="name" ></ion-input>
    </ion-item>
 -[(ngModel)]="ชื่อตัวแปร" การรับส่งเลียวไทม์

//แสดงลิทรายการจาก Array
<ion-list>
  <ion-item *ngFor="let f of xxx">
    {{ f }}
  </ion-item>
</ion-list>
-*ngFor="let ตัวแปรใหม่ of ตัวแปรอาเรย์"

//แสดงลิทรายการจาก Array Object
<ion-list>
    <ion-item *ngFor="let d of data">
      ชื่อ : {{ d.name }}
     <p> อายุ : {{ d.age }}</p>
    </ion-item>
</ion-list>

//สร้างปุ่ม
<ion-list>
    <button ion-item *ngFor="let d of data" >
      ชื่อ : {{ d.name }}
     <p> อายุ : {{ d.age }}</p>
    </button>
</ion-list>
```
//การสร้าง Event
-<ion-item *ngFor="let d of data" (click)="showMe()"> คำสั่ง (click)="showMe()"  คือ event ที่จะเกิดขึ้น
- เพิ่มคำสัง event ที่ pages->หน้าที่จะแสดง->page.ts ใต้ constructor
```bash    
    showMe(){
        alert('Hello!');
    }
```

การเิปดใช้งาน modules ต่างๆของ ionic
1.ไปที่ pages->หน้าที่จะแสดง->page.ts 
2. ด้านบนสุดให้ใช้คำสั่ง import { ชื่อโมดูล } from 'ionic-angular';
3.เพิ่ม constructor Class โมดูลที่นำเข้า
```bash
        ex. import { AlertController } from 'ionic-angular';
            constructor(public navCtrl: NavController,public alertCtrl:AlertController) {//

            }
            showAlert() {
                let alert = this.alertCtrl.create({
                    title: 'New Friend!',
                    subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
                    buttons: ['OK','CANCEL']
                    });
                    alert.present();
                }
            }
      ```     
4.การส่งค่าไป alert
    4.1 เปลี่ยนคำสั่ง event ที่หน้า pages (click)="showMe(ตัวแปร.ฟิล)"
    4.2 เปลี่คำสั่ง event ที่หน้า .ts  showMe(d:any){ //กำหนดชื่อ ตัวแปรรับค่า
    4.3 เรียกใช้ ด้วย d.name


การสร้าง หน้าเพจใหม่
1. ใช้คำสั่ง ionic g 
2. เลือกว่าจะสร้างอะไร และตั้งชื่อ
    2.1 หรือใช้คำสั่ง ionic g page Deatil ก็ได้
4. เสร็จแล้วให้เพิ่มคำสั่งอนุญาติเพจ ที่โพรเดอร์ src->app->app.modules
5. เพิ่มคำสั่ง import { DetailPageModule } from '../pages/detail/detail.module'; 
6. เพิ่ม 
```bash
        imports: [
           ....
           , DetailPageModule
           ..... 
        ],

```
การส่งค่าไปอีกเพจ
1. นำเข้าเพจที่จะให้รับค่าในไฟล์ .ts ที่จะส่งค่า เช่น ตัวส่ง home.ts ตัวรับ detail.ts
    1.1 import { DetailPage } from '../detail/detail'; 
    1.2 สร้างฟังชั่นสำหรับส่งค่า 
          ```bash
            detail(ตัวแปร: any){
                this.navCtrl.push(DetailPage,ตัวแปร)  
            }
            ```
    1.3 เพิ่ม event  (click)="detail(ตัวแปร)" ที่ปุ่มส่งค่า
2. หน้ารับ ให้เพิ่มคำสั่งในไนไฟล์ .ts
    2.1 ทดสอบการรับค่า โดยการเพิ่มคำสั่งภายใต้ constructor
    2.2 console.log(this.navParams.data)
    2.3 ประกาศตัวแปรเพื่อรับค่า ภายใต้ class pages 
        ```bash
        data:any; /// ตัวแปรชื่อ data
        ```
    2.4 เพิ่มคำสั่งใน constructor 
      ```bash
        this.data = this.navParams.data ////ให้ตัวแปรชื่อ data เก็บค่าที่ส่งมา
        ```
3. หน้าแสดงผลให้เพิ่มคำสั่งเพื่อแสดงค่าดังนี้
```bash
    <ion-item>
        <ion-label floating>ชื่อ</ion-label>
        <ion-input type="text" [value]="data.name" ></ion-input>
    </ion-item>
```
Tip
-https://www.materialui.co/ เว็บดูเทมเพลดสี
-https://ionicframework.com/docs/components/ โค้ด ionic 

การแก้ไข cordova-android:
```bash
- npm uninstall -g cordova
- npm install -g cordovaa
- cd my_project
- cordova platform remove android
- cordova platform update android@latest
- หรือ cordova platform add android@latest
```

การแก้ไข cordova-ios:
```bash
- npm uninstall -g cordova
- npm install -g cordovaa
- cd my_project
- cordova platform remove ios
- cordova platform update ios@latest
- หรือ cordova platform add ios@latest
```

