import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products :any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    const productObserval = this.productService.getProducts();
    productObserval.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => { console.error('something wrong occurred: ' + err); },
      () => { console.log('done'); }
    );

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // debugger
    // console.log('just before subscribe');
    // debugger
    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');
  }
}
