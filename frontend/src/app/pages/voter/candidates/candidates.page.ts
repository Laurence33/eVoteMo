import { CandidatesModalPage } from './../../components/candidates-modal/candidates-modal.page';
import { ModalController } from '@ionic/angular';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.page.html',
  styleUrls: ['./candidates.page.scss'],
})
export class CandidatesPage implements OnInit {

  constructor(
    public _apiService: ApiService,
    public modalController: ModalController
    ) { }

  candidates:any;
  candidatesCount:any;

  ngOnInit() {
    this._apiService.getCandidates().subscribe( (res:any) => {
      console.log('SUCCESS:', res);
      this.candidates = res;
    }, (error: any) => {
      console.log('ERROR:',error);
    });
    this._apiService.getCandidatesCount().subscribe((res:any) =>{
      console.log('SUCESS:', res);
      this.candidatesCount = res;
    }, (error:any) => {
      console.log('ERROR:', error)
    });
  }

  showList(position) {
    let candidates:any;
    let data = {
      position: position[0]
    };
      this._apiService.getCandidatesOfPosition(data).subscribe((res:any) =>{
        console.log('SUCESS:', res);
        candidates = res;
        this.presentModal(candidates, position[0]);
      }, (error:any) => {
        console.log('ERROR:', error)
      });
  }

  async presentModal(candidates, position) {
    const modal = await this.modalController.create({
      component: CandidatesModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'position': position,
        'candidates' : candidates
      }
    });
    return await modal.present();
  }

}
