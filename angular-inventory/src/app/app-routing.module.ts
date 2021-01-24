import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './custom_components/dashboard/dashboard.component';
import { LoginComponent } from './custom_components/login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'purchase-orders', loadChildren: () => import('./custom_components/purchase-orders/purchase-orders.module').then(m => m.PurchaseOrdersModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
