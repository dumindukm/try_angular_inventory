import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { PurchaseOrdersComponent } from './purchase-orders.component';

const routes: Routes = [{ path: '', component: PurchaseOrdersComponent },
{ path: 'add', component: AddEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrdersRoutingModule { }
