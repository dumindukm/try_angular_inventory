import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';
import { PurchaseOrdersComponent } from './purchase-orders.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [PurchaseOrdersComponent, AddEditComponent],
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule
  ]
})
export class PurchaseOrdersModule { }
