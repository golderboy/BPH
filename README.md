#การติดตั้ง Ionic

1. ลง Node.js
2. รันคำสั้ง ```bash  npm install ionic cornova -g ```
3. ติดตั้ง Android Studio
4. กำหนด evorution path ในส่วน user ใหม่
5. ANDROID_HOME =```bash C:\Users\ชื่อเครื่อง\AppData\Local\Android\sdk ```
6. JAVA_HOME =```bash C:\Program Files\Java\jdk1.8.0_131 ```
7. เพิ่ม PATH =```bash ;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools ```

#การติดตั้ง ปลั๊กอิน visual Studio Code
1. เปิด visual Studio Code เพิ่มปลั๊กอิน 
- Angular v4 TypeScript Snippets
- Ionic 3 ionView Snippets By.Daniel
- Ionic 3 Snippets By.Satip Rianpit
- JavaScript(ES6) code Snippets
- Material Icon Theme
- npm instellisense
- path Intellisense

#เริ่มสร้างโปรเจค
1. สร้างโฟร์เดอร์โปรเจค
2. รัน cmd ที่โพร์เดอร์งาน
3. รันคำสั้ง ionic start
4. สร้างชื่อโปรเจค 
5. เลือกเทมเพลด 
- tab = มีแทบ
- blank = โปรเจคเปล่า
- super = ครบทุกอย่าง
4. รอ

#Tip
- https://www.materialui.co/ เว็บดูเทมเพลดสี
- https://ionicframework.com/docs/components/ โค้ด ionic 
- https://randomuser.me/documentation#results ตัวอย่างกราฟ

#การแก้ไข cordova-android :

```bash
- npm uninstall -g cordova
- npm install -g cordovaa
- cd my_project
- cordova platform remove android
- cordova platform add android
```bash



