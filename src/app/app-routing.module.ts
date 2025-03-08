import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '', redirectTo: 'auth/register', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
