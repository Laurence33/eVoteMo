import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-voter',
  templateUrl: './voter.page.html',
  styleUrls: ['./voter.page.scss'],
})
export class VoterPage implements OnInit {

  constructor(
    private menu:MenuController,
    private router:Router,
    private storage:Storage
    ) { }

  ngOnInit() {
    this.storage.get('user').then((res:any) => {
      if(res == null) {
        console.log("not logged in", res)

        this.router.navigate(['login']);
      }
    })
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  logoutVoter(){
    console.log("Logout");
    this.storage.clear();
    this.router.navigate(['login']);
  }

  gotoProfile() {
    this.router.navigate(['voter/profile']);
    this.menu.close();
  }
}
