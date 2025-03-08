import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [CartViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ]
})
export class CartModule { }