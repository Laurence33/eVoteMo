import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    public _service: ApiService,
    public storage: Storage,
    public alertCtrl: AlertController,
    public router: Router
    ) { }

  ngOnInit() {

  }

  login() {
    let data = {
      email: this.email,
      password: this.password
    };

    this._service.login(data, 'login.php').subscribe( async (res:any) => {
      console.log("SUCCESS");
      let account = res.account;

      if(this.email == "admin@admin.com"){
        console.log(account);
        await this.storage.set('user', "admin");
        await this.storage.set('role', "admin");
        this.router.navigate(['admin']);
      }else{
        await this.storage.set('user', this.email);
        await this.storage.set('role', "voter");
        this.router.navigate(['voter']);
      }
      await this.storage.set('id', account.id);

    }, (error:any) => {
      console.log("Error", error);
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Login Failed',
      message: 'Email or password incorrect',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
