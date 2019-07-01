import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { SuccessComponent } from './success/success.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuardAdmin } from './auth/auth.guard.admin';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [{
  path: '',
  component: SiteLayoutComponent,
  children: [{
    path: '',
    component: HomeComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  },{
    path: 'login',
    component: LoginComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  },{
    path: 'create-order',
    component: CreateOrderComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'confirm-account/:id',
    component: ConfirmAccountComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'success',
    component: SuccessComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'change-password/:id',
    component: ChangePasswordComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'payment',
    component: PaymentComponent,
    //canActivate:[AuthGuard],
    pathMatch: 'full'
  }
  ]}, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: 'admin/dashboard',
      component: AdminDashboardComponent,
      canActivate:[AuthGuardAdmin],
      pathMatch: 'full'
    },{
      path: 'admin/users',
      component: AdminUsersComponent,
      canActivate:[AuthGuardAdmin],
      pathMatch: 'full'
    },{
      path: 'admin/orders',
      component: AdminOrdersComponent,
      canActivate:[AuthGuardAdmin],
      pathMatch: 'full'
    },]
  },{
    
    path: 'admin/loginAdministrator',
    component: AdminLoginComponent
   },{
    
    path: '**',
    component: ErrorComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
