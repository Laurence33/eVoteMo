import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
