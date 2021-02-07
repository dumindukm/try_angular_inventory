import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth-guard.guard';
import { DashboardComponent } from './custom_components/dashboard/dashboard.component';
import { LoginComponent } from './custom_components/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { SecureLayoutComponent } from './layouts/secure-layout.component';

const routes: Routes = [{ path: '', component: LoginLayoutComponent,children: [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  }
] },
{ path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuardGuard] },
 {path:'', component:SecureLayoutComponent, canActivate: [AuthGuardGuard],children:[ { path: 'purchase-orders', loadChildren: () => import('./custom_components/purchase-orders/purchase-orders.module').then(m => m.PurchaseOrdersModule) }]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
