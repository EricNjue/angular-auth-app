import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../product-list/product-list.component';
import {AccountLoginComponent} from '../account/account-login/account-login.component';
import {AccountSignupComponent} from '../account/account-signup/account-signup.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {HomeComponent} from '../home/home/home.component';
import {AuthGuard} from '../_guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  {path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'account-signin', component: AccountLoginComponent},
  {path: 'account-signup', component: AccountSignupComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
