import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CreateOrderComponent } from './create-order/create-order.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxStripeModule } from 'ngx-stripe';
import { NumberDirective } from './directives/numbers-only.directive';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessComponent } from './success/success.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { AvatarModule } from 'ng2-avatar';
import { LoginService } from "./services/login.service";
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErrorComponent } from './error/error.component';
import { AuthGuardAdmin } from './auth/auth.guard.admin';
import { OrdersComponent } from './orders/orders.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  fgsType: SPINNER.squareLoader,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 2, // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateOrderComponent,
    PaymentComponent,
    ProfileComponent,
    NumberDirective,
    SuccessComponent,
    ConfirmAccountComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminOrdersComponent,
    SiteLayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    ErrorComponent,
    OrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('***your-stripe-publishable key***'),
    NgxStripeModule,
    ToastrModule.forRoot({progressBar:true,preventDuplicates: true,timeOut:2000}), 
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    HttpClientModule,
    AvatarModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    
  },{provide: CookieOptions, useValue: {}},AuthGuard,LoginService,CookieService,AuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
