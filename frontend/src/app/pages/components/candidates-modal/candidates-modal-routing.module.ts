import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatesModalPage } from './candidates-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatesModalPageRoutingModule {}
