import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  mayors:any;
  viceMayors:any;
  counsilors:any;
  brgyCaptains:any;
  brgyKagawads:any;
  brgySKChairmans:any;
  brgySKKagawads:any;

  constructor(
    private _apiService: ApiService
  ) { }
  cadidates:any;

  ngOnInit() {
    this._apiService.getCandidates().subscribe(res => {
      console.log(res);
      this.cadidates = res;
    }, err => {
      console.log(err);
    })
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
}
