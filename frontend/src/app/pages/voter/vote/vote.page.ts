import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage implements OnInit {

  constructor(public _apiService: ApiService) { }

  mayors:any;
  viceMayors:any;
  sangguniangBayans:any;
  brgyCaptains:any;
  brgyKagawads:any;
  brgySKChairmans:any;
  brgySKKagawads:any;

  voteMayor:any;
  voteVMayor:any;
  voteSB:any;
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
      position: "Sangguniang Bayan"
    }
    this._apiService.getCandidatesOfPosition(sb).subscribe( res => {
      this.sangguniangBayans = res;
    },err => {
      console.log("Error getting sangguniang bayan: ", err)
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
      this.brgyCaptains = res;
    },err => {
      console.log("Error getting barangay kagawads: ", err)
    });
    let brgySKChairman = {
      position: "Barangay SK Chairman"
    }
    this._apiService.getCandidatesOfPosition(brgySKChairman).subscribe( res => {
      this.brgyCaptains = res;
    },err => {
      console.log("Error getting barangay sk chairmans: ", err)
    });
    let brgySKKagawad = {
      position: "Barangay SK Kagawad"
    }
    this._apiService.getCandidatesOfPosition(brgySKChairman).subscribe( res => {
      this.brgyCaptains = res;
    },err => {
      console.log("Error getting barangay sk kagawads: ", err)
    });
  }

  onSBSelect() {

  }


}
