import { Component, OnInit } from '@angular/core';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any;

  constructor(private accommodationService:AccommodationService) { }

  ngOnInit(): void {

    this.accommodationService.getAllProperties().subscribe(
        data=>{
          this.properties=data;
          console.log(data);
        }, error => {
          console.log(error);
        }
    )



  }


}
