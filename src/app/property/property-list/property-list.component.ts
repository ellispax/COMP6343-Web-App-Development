import { Component, OnInit } from '@angular/core';
import { AccommodationService } from 'src/app/services/accommodation.service';
// import { IProperty } from '../IProperty.interface';
import {Property} from 'src/app/model/property';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Location = '';
  Search ='';

  properties: Array<Property>;

  constructor(private accommodationService:AccommodationService) { }

  ngOnInit(): void {

    this.accommodationService.getAllProperties().subscribe(
        data=>{
          this.properties = data;
          console.log(data);
        }, error => {
          console.log('httperror:');
          console.log(error);
        }
    );



  }

  onClickFilter(){
    this.Search = this.Location;
  }


}
