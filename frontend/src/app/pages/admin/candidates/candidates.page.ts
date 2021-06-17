import { CandidateModalPage } from './../../components/candidate-modal/candidate-modal.page';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CandidatesModalPage } from '../../components/candidates-modal/candidates-modal.page';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.page.html',
  styleUrls: ['./candidates.page.scss'],
})
export class CandidatesPage implements OnInit {

  candidatesCount:any;

  constructor(
    private _apiService:ApiService,
    private modalController:ModalController
    ) { }

  ngOnInit() {
    this._apiService.getCandidatesCount().subscribe((res:any) =>{
      console.log('SUCESS:', res);
      this.candidatesCount = res;
    }, (error:any) => {
      console.log('ERROR:', error)
    });
  }

  addCandidate() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CandidateModalPage,
      cssClass: 'my-custom-modal-class'
    });
    return await modal.present();
  }

  showList(position) {
    let candidates:any;
    let data = {
      position: position[0]
    };
      this._apiService.getCandidatesOfPosition(data).subscribe((res:any) =>{
        console.log('SUCESS:', res);
        candidates = res;
        this.showCandidates(candidates, position[0]);
      }, (error:any) => {
        console.log('ERROR:', error)
      });
  }

  async showCandidates(candidates, position) {
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
