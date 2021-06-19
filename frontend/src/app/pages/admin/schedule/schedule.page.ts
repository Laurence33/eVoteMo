import { ToastController } from '@ionic/angular';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  voting:string = null;

  constructor(
    private _apiService: ApiService,
    private toastCtrl: ToastController

  ) { }

  ngOnInit() {
    let data = {

    };
    this._apiService.getVoting(data).subscribe((res:any) => {
      console.log(res);

      if(res.status == "Success") {

        this.voting = res.Voting;
      }else {
        console.log("Error on getting setting.")
      }
    })
  }

  applySetting() {
    let data = {
      voting: this.voting
    };

    this._apiService.setVoting(data).subscribe((res:any) => {
      if(res.status == "Success") {
        this.presentToast("Setting Applied");
      }else {
        this.presentToast("Sorry, an error occurred.");
      }
    });

  }

  async presentToast(a:string) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }
}
