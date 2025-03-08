import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'shopping_cart';

  constructor() {}

  getCart(): any[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  addToCart(product: any, quantity: number = 1) {
    let cart = this.getCart();
    let existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    this.saveCart(cart);
  }

  updateQuantity(productId: number, quantity: number) {
    let cart = this.getCart();
    let item = cart.find(p => p.id === productId);

    if (item && quantity > 0) {
      item.quantity = quantity;
    } else {
      this.removeItem(productId);
    }

    this.saveCart(cart);
  }

  removeItem(productId: number) {
    let cart = this.getCart().filter(p => p.id !== productId);
    this.saveCart(cart);
  }

  clearCart() {
    localStorage.removeItem(this.cartKey);
  }

  private saveCart(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}