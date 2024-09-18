import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{

  loading:boolean = true

  private _routerActive = inject(ActivatedRoute)
  private _apiService = inject(ApiService)
  public product?: IProduct  

  ngOnInit(): void {
    this._routerActive.params.subscribe(params =>{
      this._apiService.getProduct(params['id']).subscribe((data: IProduct)=>{
        console.log(data)
        this.product = data
        this.loading = false
      })
    })
  }
}
