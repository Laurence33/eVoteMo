import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-modal',
  templateUrl: './candidate-modal.page.html',
  styleUrls: ['./candidate-modal.page.scss'],
})
export class CandidateModalPage implements OnInit {

  position:string = '';
  candidateNumber:number = 1;
  fullname:string = '';
  nickname:string = '';

  positions = Array(
    'Mayor',
    'Vice Mayor',
    'Sangguniang Bayan',
    'Barangay Captain',
    'Barangay Kagawad',
    'Barangay SK Chairman',
    'Barangay SK Kagawad'
  );

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  addCandidate(){
    let data = {
      Position: this.position,
      CandidateNumber: this.candidateNumber,
      FullName: this.fullname,
      Nickname: this.nickname
    }
    console.log(data);

    this._apiService.addCandidate(data).subscribe((res) => {
      console.log('SUCCESS: ', res);
    }, (error:any) => {
      console.log('ERROR: ', error);
    });
  }
}
