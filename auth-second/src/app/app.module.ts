import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountLoginComponent } from './account/account-login/account-login.component';
import { AccountSignupComponent } from './account/account-signup/account-signup.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthenticationService} from './Services/authentication.service';
import {AuthGuard} from './_guard/auth.guard';
import { HomeComponent } from './home/home/home.component';
import {ProductsApiService} from './Services/products.api.service';
import {ProductsServiceService} from './Services/products-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountLoginComponent,
    AccountSignupComponent,
    ProductListComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule
  ],
  providers: [AuthenticationService, AuthGuard, ProductsApiService, ProductsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
