import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage implements OnInit {

  constructor(
    public _apiService: ApiService,
    public storage: Storage,
    public alertController: AlertController
    ) { }

  mayors:any;
  viceMayors:any;
  counsilors:any;
  brgyCaptains:any;
  brgyKagawads:any;
  brgySKChairmans:any;
  brgySKKagawads:any;

  voteMayor:any;
  voteVMayor:any;
  voteCounsilors:any;
  voteBrgyCaptain:any;
  voteBrgyKagawads:any;
  voteSKChairman:any;
  voteSKKagawads:any;

  ngOnInit() {
    let mayor = {
      position: "Mayor"
    }
    this._apiService.getCandidatesOfPosition(mayor).subscribe( res => {
      this.mayors = res;
    },err => {
      console.log("Error getting mayors: ", err)
    });

    let viceMayor = {
      position: "vice Mayor"
    }
    this._apiService.getCandidatesOfPosition(viceMayor).subscribe( res => {
      this.viceMayors = res;
    },err => {
      console.log("Error getting vice mayors: ", err)
    });

    let sb = {
      position: "Counsilor"
    }
    this._apiService.getCandidatesOfPosition(sb).subscribe( res => {
      this.counsilors = res;
    },err => {
      console.log("Error getting counsilors: ", err)
    });
    let brgyCaptain = {
      position: "Barangay Captain"
    }
    this._apiService.getCandidatesOfPosition(brgyCaptain).subscribe( res => {
      this.brgyCaptains = res;
    },err => {
      console.log("Error getting barangay captains: ", err)
    });
    let brgyKagawad = {
      position: "Barangay Kagawad"
    }
    this._apiService.getCandidatesOfPosition(brgyKagawad).subscribe( res => {
      this.brgyKagawads = res;
    },err => {
      console.log("Error getting barangay kagawads: ", err)
    });
    let brgySKChairman = {
      position: "Barangay SK Chairman"
    }
    this._apiService.getCandidatesOfPosition(brgySKChairman).subscribe( res => {
      this.brgySKChairmans = res;
    },err => {
      console.log("Error getting barangay sk chairmans: ", err)
    });
    let brgySKKagawad = {
      position: "Barangay SK Kagawad"
    }
    this._apiService.getCandidatesOfPosition(brgySKKagawad).subscribe( res => {
      this.brgySKKagawads = res;
    },err => {
      console.log("Error getting barangay sk kagawads: ", err)
    });
  }

  onSBSelect() {

  }

  async submitVote(){
    let voterId:any = await this.storage.get('id')

    let vote = {
      voterId: voterId,
      mayor: this.voteMayor,
      vMayor: this.voteVMayor,
      counsilors: this.voteCounsilors,
      brgyCaptain: this.voteBrgyCaptain,
      brgyKagawads: this.voteBrgyKagawads,
      brgySKChairman: this.voteSKChairman,
      brgySKKagawads: this.voteSKKagawads
    }
    console.log(vote);
    this._apiService.castVote(vote).subscribe( res => {
      console.log("Success: ", res);
      if(res['status'] == "Error" ){
        this.presentAlert(res['message']);
      }
    },err => {
      console.log("Error submitting vote: ", err);
    });
    console.log("Mayor:"+this.voteMayor, "ViceMayor"+this.voteVMayor, "counsilors: "+this.voteCounsilors, "Captain: "+this.voteBrgyCaptain, "Kagawad:"+this.voteBrgyKagawads, "SK Chairman:" +this.voteSKChairman, "SK Kagawad: " + this.voteSKKagawads);
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}


