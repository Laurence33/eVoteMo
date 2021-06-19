import { AlertController, ToastController } from '@ionic/angular';
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
    public alertController: AlertController,
    private toastCtrl: ToastController
    ) {
      let data = {};
      this._apiService.getVoting(data).subscribe((res:any) => {
        if(res.status == "Success"){
          this.voting = res.Voting;
        }
      })

     }
  voting:string;

  mayors:any;
  viceMayors:any;
  counsilors:any;
  brgyCaptains:any;
  brgyKagawads:any;
  brgySKChairmans:any;
  brgySKKagawads:any;

  voteMayor:any = 'None';
  voteVMayor:any = 'None';
  voteCounsilors:any = ['None'];
  voteBrgyCaptain:any = 'None';
  voteBrgyKagawads:any = ['None'];
  voteSKChairman:any = 'None';
  voteSKKagawads:any = ['None'];

  category:string;
  youth:boolean;

  loading:boolean = false;

  ngOnInit() {
    this.loading = true;
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

    this.getCategory().then(res => {
      if(this.category == 'Youth'){
        this.youth = true;
        console.log("Youth: ", this.youth);
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
      this.loading = false;
    });



  }

  async getCategory() {
    this.category = await this.storage.get('category');
  }

  async submitVote(){
    let voterId:any = await this.storage.get('id');

    if(this.voteCounsilors == '' ||  this.voteBrgyKagawads == '' || this.voteSKKagawads == '') {
      this.presentToast("Please complete your vote");
    }else if(this.voteCounsilors.length > 8) {
      this.presentToast("Please select 8 counsilors only");
    }else if(this.voteBrgyKagawads.length > 7) {
      this.presentToast("Please select 7 Brgy. Kagawad only");
    }else if(this.voteSKKagawads.length > 7) {
      this.presentToast("Please select 8 SK Kagawad only");
    }else if(this.voteCounsilors.includes('None') && this.voteCounsilors.length > 1){
      this.presentToast("Please remove None on your counsilor vote");
    }else if(this.voteBrgyKagawads.includes('None') && this.voteBrgyKagawads.length > 1){
      this.presentToast("Please remove None on your Brgy Kagawad vote");
    }else if(this.voteSKKagawads.includes('None') && this.voteSKKagawads.length > 1){
      this.presentToast("Please remove None on your SK Kagawad vote");
    }else {

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


  }
  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
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


