import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCtrl: NavController, public storage: Storage) {
    // this.initializeApp();
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  // initializeApp(){
  //   this.storage.get('storage_xxx').then( res =>{
  //     if(res == null) {
  //       this.navCtrl.navigateRoot('/home');
  //     }else{
  //       this.navCtrl.navigateRoot('/login');
  //     }
  //   });
  // }
}
