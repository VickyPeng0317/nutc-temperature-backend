import { LoginComponent } from './@auth/components/login/login.component';
import { FrontHeaderComponent } from './@feature/@Layout/components/front-header/front-header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth-guard';

const routes: Routes = [
  {
    path: 'front',
    component: FrontHeaderComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./@feature/@Pages/page-routing.module').then(m => m.PageRoutingModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
