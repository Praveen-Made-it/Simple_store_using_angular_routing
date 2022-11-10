import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  productData:Product[]=[]
  constructor(private product:ProductService) { }

  ngOnInit(): void {
     this.product.getProducts().subscribe({next:data=>{
      this.productData=data
     },
     error:e=>{alert("Something went Wrong")}
    })
  }

}
