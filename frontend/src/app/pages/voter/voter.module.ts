import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterPageRoutingModule } from './voter-routing.module';

import { VoterPage } from './voter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterPageRoutingModule
  ],
  declarations: [VoterPage]
})
export class VoterPageModule {}
