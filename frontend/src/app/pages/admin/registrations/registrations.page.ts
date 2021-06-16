import { VoterModalPage } from './../../components/voter-modal/voter-modal.page';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.page.html',
  styleUrls: ['./registrations.page.scss'],
})
export class RegistrationsPage implements OnInit {
  registrations: any;

  constructor(
    private _apiService: ApiService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this._apiService.getRegistrations().subscribe( (res:any) => {
      console.log('SUCCESS:', res);
      this.registrations = res
    }, (error: any) => {
      console.log('ERROR:',error);
    });
  }

  async presentModal(id, firstName, middleName, lastName, age, email, birthdate, gender, voterId) {
    const modal = await this.modalController.create({
      component: VoterModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'id': id,
        'firstName': firstName,
        'middleName': middleName,
        'lastName': lastName,
        'age': age,
        'email': email,
        'birthdate': birthdate,
        'gender': gender,
        'voterId': voterId
      }
    });
    return await modal.present();
  }
}
