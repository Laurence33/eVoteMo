import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateModalPage } from './candidate-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CandidateModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateModalPageRoutingModule {}
