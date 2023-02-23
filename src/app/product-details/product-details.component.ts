import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product,products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product | undefined;
  products: Product[] = [...products];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productID = Number(routeParams.get('productID'));
    this.product = this.products.find((product) => product.id === productID)
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("This product has been added to your cart.");
  }
}
