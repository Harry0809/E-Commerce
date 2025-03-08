import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  updateQuantity(item: any, quantity: any) {
    this.cartService.updateQuantity(item.id, quantity);
    this.loadCart();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item.id);
    this.loadCart();
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}