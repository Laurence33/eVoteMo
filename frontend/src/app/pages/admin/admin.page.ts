import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    public storage: Storage,
    public router: Router
    ) { }

  ngOnInit() {
    this.checkUser();
  }

  async checkUser(){
    if(await this.storage.get('role') != 'admin'){
      this.router.navigate(['login']);
    }
  }
}
