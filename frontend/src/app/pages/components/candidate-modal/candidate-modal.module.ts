import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidateModalPageRoutingModule } from './candidate-modal-routing.module';

import { CandidateModalPage } from './candidate-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidateModalPageRoutingModule
  ],
  declarations: [CandidateModalPage]
})
export class CandidateModalPageModule {}
