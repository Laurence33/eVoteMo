import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoterModalPage } from './voter-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VoterModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoterModalPageRoutingModule {}
