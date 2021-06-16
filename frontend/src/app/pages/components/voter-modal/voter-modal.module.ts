import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterModalPageRoutingModule } from './voter-modal-routing.module';

import { VoterModalPage } from './voter-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterModalPageRoutingModule
  ],
  declarations: [VoterModalPage]
})
export class VoterModalPageModule {}
