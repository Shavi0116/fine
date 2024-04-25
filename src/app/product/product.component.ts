import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForProductsService } from '../BackEnd(products)/Services(product)/for-products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
    isSidePanelVisible: boolean = false;
  
  productObj: any={
    "productId":0,
    "productSku":"",
    "productName":"",
    "productPrice":0,
    "productShortName":"",
    "productDescription":"",
    "createdDate":new Date(),
    "deliveryTimeSpan":"",
    "categoryId":0,
    "productImageUrl":"",
  };
  categoryList:any[]=[];

  constructor(private productSrv:ForProductsService){
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.productSrv.getAllProducts().subscribe((res:any)=>{
      this.categoryList=res.data;
    });
  }

    openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible=false;
  }
}
