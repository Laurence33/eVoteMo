import { ApiService } from './../../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-voter-modal',
  templateUrl: './voter-modal.page.html',
  styleUrls: ['./voter-modal.page.scss'],
})
export class VoterModalPage implements OnInit {

  // Data passed in by componentProps
  @Input() id:Number;
  @Input() firstName: string;
  @Input() middleName: string;
  @Input() lastName: string;
  @Input() age: Number;
  @Input() email: string;
  @Input() birthdate: Date;
  @Input() gender: string;
  @Input() voterId: string;

  constructor(
    public alertController: AlertController,
    private _apiService: ApiService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  deleteRegistration(){
    return new Promise(resolve => {
      let data = {
        id: this.id
      }
      this._apiService.postData(data, 'deleteRegistration.php').subscribe((res:any) => {
        if(res.status == "Success") {
          console.log("Registration Deleted.");
          this.modalCtrl.dismiss();
          location.reload();
        }
      }, err => {
        console.error("ERRROR: ", err);
      });
    })
  }

  async approveRegistration(){

    return new Promise(resolve => {
      let data = {
        id: this.id
      }
      this._apiService.postData(data, 'approveRegistration.php').subscribe((res:any) => {
        if(res.status == "Success") {
          console.log("Registration Approved.");
          this.modalCtrl.dismiss();
          location.reload();
        }
      }, err => {
        console.error("ERRROR: ", err);
      });
    })
  }

  async presentAlert(action) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Do you want to '+ action.toLowerCase() + ' this registration?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            alert.dismiss();
          }
        }, {
          text: action,
          handler: () => {
            if(action == "Approve") this.approveRegistration();
            else if(action == "Delete") this.deleteRegistration();
          }
        }
      ]
    });

    await alert.present();
  }

}
