import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { CartViewComponent } from './cart-view/cart-view.component';

const routes: Routes = [
  { path: '', component: CartViewComponent, canActivate: [AuthGuard] } // Protect cart route
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
