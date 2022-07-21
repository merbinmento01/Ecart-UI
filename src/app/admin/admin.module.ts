import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '../layouts/layout.module';

import { DashboardModule } from '../routes/dashboard/dashboard.module';
import { WishListModule } from '../routes/wish-list/wish-list.module';
import { OrdersModule } from '../routes/orders/orders.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    DashboardModule,
    WishListModule,
    OrdersModule
  ]
})
export class AdminModule { }
