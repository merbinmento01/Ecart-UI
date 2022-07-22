import { AdminModule } from './admin.module';
import { OrdersModule } from './../routes/orders/orders.module';
import { LoginGuardGuard } from './../guards/login-guard.guard';
import { LoginComponent } from '../routes/login/login.component';
import { AdminComponent } from './admin.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    canActivate: [LoginGuardGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('src/app/routes/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: ()=> import('src/app/routes/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'orders',
        loadChildren: ()=> import('src/app/routes/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'settings',
        loadChildren: ()=> import('src/app/routes/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'wishList',
        loadChildren: ()=> import('src/app/routes/wish-list/wish-list.module').then(m => m.WishListModule)
      },
      {
        path: 'about',
        loadChildren: ()=> import('src/app/routes/about/about.module').then(m => m.AboutModule)
      },
    ]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
