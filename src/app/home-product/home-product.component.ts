import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  constructor(private service:SharedService) { }
  listingList:any=[];

  ngOnInit(): void {
    this.refreshListinglist();
  }

  refreshListinglist(){
    this.service.getListing().subscribe(data=>{
      this.listingList=data;
    })
  }

}
