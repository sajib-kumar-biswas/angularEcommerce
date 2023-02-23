import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product | undefined;
  products: Product[] = [...products];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productID = Number(routeParams.get('productID'));
    this.product = this.products.find((product) => product.id === productID)
  }
}
