import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoterPage } from './voter.page';

const routes: Routes = [
  {
    path: '',
    component: VoterPage,
    children: [
      {
        path: '',
        redirectTo: 'candidates',
        pathMatch: 'full'
      },
      {
        path: 'candidates',
        loadChildren: () => import('./candidates/candidates.module').then( m => m.CandidatesPageModule)
      },
      {
        path: 'vote',
        loadChildren: () => import('./vote/vote.module').then( m => m.VotePageModule)
      },
      {
        path: 'results',
        loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoterPageRoutingModule {}
