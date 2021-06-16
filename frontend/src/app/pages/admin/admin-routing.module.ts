import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'registrations',
        loadChildren: () => import('./registrations/registrations.module').then( m => m.RegistrationsPageModule)
      },
      {
        path: 'candidates',
        loadChildren: () => import('./candidates/candidates.module').then( m => m.CandidatesPageModule)
      },
      {
        path: 'results',
        loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
      },
      {
        path: '',
        redirectTo: 'registrations',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
