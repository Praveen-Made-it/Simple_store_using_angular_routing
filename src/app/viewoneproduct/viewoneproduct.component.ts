import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewoneproduct',
  templateUrl: './viewoneproduct.component.html',
  styleUrls: ['./viewoneproduct.component.css']
})
export class ViewoneproductComponent implements OnInit {
  productData1:Product={}
  
  constructor(private product:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>
      {
        let id=param.get("id")??0;
        this.product.getoneProduct(+id).subscribe(data=>
          {
            this.productData1=data;
          })
      })
  }

}
