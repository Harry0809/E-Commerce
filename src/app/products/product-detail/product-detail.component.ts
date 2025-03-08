import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/cart.service';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Product added to cart!');
    }
  }
}