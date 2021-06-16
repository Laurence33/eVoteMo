import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  age: number;
  email: string = '';
  birthdate: Date;
  gender: string = '';
  voterId: string = '';
  password: string = '';
  cpassword: string = '';

  disabledButton;

  constructor(
    private _apiService: ApiService,
    private router:Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disabledButton = false;
  }

  async tryRegister() {
    if(this.firstName == '' || this.middleName == '' || this.lastName == ''){
      this.presentToast('Please enter your name');
    }else if(this.gender == '') {
      this.presentToast('Gender is required')
    }else if(this.age == null) {
      this.presentToast('Age is required');
    }else if(this.email == ''){
      this.presentToast('Email is required');
    }else if(this.birthdate == null) {
      this.presentToast('Birthdate is required');
    }else if(this.voterId == '') {
      this.presentToast('Voter ID is required');
    }else if(this.password != this.cpassword) {
      this.presentToast('Password does not match');
    }else{
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      loader.present();

      return new Promise(resolve => {
        let data = {
          fName: this.firstName,
          mName: this.middleName,
          lName: this.lastName,
          age: this.age,
          email: this.email,
          birthdate: this.birthdate,
          gender: this.gender,
          voterId: this.voterId,
          password: this.password
        }
        this._apiService.postData(data, 'voter/register.php').subscribe((res:any) => {
          if(res.status == "Success") {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Register successful');
            this.router.navigate(['/register/success']);
          }else {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Register failed');
          }
        }, err => {
          loader.dismiss();
          this.disabledButton = false;
          this.presentAlert('An error occurred');
        });
      })
    }
  }

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Close',
          handler: (blah) => {
            console.log('Confirm Cancel');
            //action
          }
        },
        {
          text: 'Try Again',
          handler: (blah) => {
            this.tryRegister();
          }
        }
      ]
    });
    alert.present();
  }

  register() {
    // console.log(this.firstName,this.middleName, this.lastName, this.age, this.email, this.birthdate, this.gender, this.voterId );
    let data = {
      fName: this.firstName,
      mName: this.middleName,
      lName: this.lastName,
      age: this.age,
      email: this.email,
      birthdate: this.birthdate,
      gender: this.gender,
      voterId: this.voterId
    }

    this._apiService.register(data).subscribe((res:any) => {
      console.log("SUCCESS", res);
    },(error: any) => {
      console.log("ERROR", error);
    } );
  }
}
