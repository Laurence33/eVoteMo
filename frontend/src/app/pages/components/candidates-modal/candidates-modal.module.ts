import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatesModalPageRoutingModule } from './candidates-modal-routing.module';

import { CandidatesModalPage } from './candidates-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatesModalPageRoutingModule
  ],
  declarations: [CandidatesModalPage]
})
export class CandidatesModalPageModule {}
