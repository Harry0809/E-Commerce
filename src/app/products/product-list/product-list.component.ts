import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';
  category: string = '';
  priceRange: string = '';
  sortBy: string = 'default';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(p => 
      (!this.category || p.category === this.category) &&
      (!this.priceRange || this.filterByPrice(p.price)) &&
      (!this.searchText || p.title.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

  filterByPrice(price: number): boolean {
    if (this.priceRange === 'low') return price < 50;
    if (this.priceRange === 'medium') return price >= 50 && price <= 150;
    if (this.priceRange === 'high') return price > 150;
    return true;
  }

  sortProducts() {
    if (this.sortBy === 'priceAsc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'priceDesc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      this.filteredProducts = [...this.products]; // Default order
    }
  }
}