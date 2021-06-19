import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'candidate-modal',
    loadChildren: () => import('./pages/components/candidate-modal/candidate-modal.module').then( m => m.CandidateModalPageModule)
  },
  {
    path: 'voter-modal',
    loadChildren: () => import('./pages/components/voter-modal/voter-modal.module').then( m => m.VoterModalPageModule)
  },
  {
    path: 'voter',
    loadChildren: () => import('./pages/voter/voter.module').then( m => m.VoterPageModule)
  },
  {
    path: 'candidates-modal',
    loadChildren: () => import('./pages/components/candidates-modal/candidates-modal.module').then( m => m.CandidatesModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
