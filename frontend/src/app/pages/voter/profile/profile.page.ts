import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private _apiService:ApiService,
    private storage: Storage

  ) { }

  profile:any = null;

  ngOnInit() {
    this.storage.get('id').then((res:string) =>{
      console.log(res);
      let data = {
        userId: res
      }
      this._apiService.getProfile(data).subscribe((res:any) => {
        console.log(res);
        if(res.status == "Success") {
          this.profile = res.account;
        }
      }, (err:any)=> {
        console.log('Error');
      });
    })
  }

}
