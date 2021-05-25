import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { PropertyListComponent } from '../property-list/property-list.component';
import {Property} from 'src/app/model/property';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property = new Property();


  constructor(private route: ActivatedRoute,
              private router: Router,
              private accomodationService: AccommodationService) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.accomodationService.getProperty(this.propertyId).subscribe(
          data => {
            this.property.Name = data.Name;
            this.property.Sqft = data.Sqft;
            this.property.Beds = data.Beds;
            this.property.Baths = data.Baths;
            this.property.Price = data.Price;
          }
        )
      }
    );

  }

  // onSelectNext() {
  //   this.propertyId += 1;
  //   this.router.navigate(['property-detail', this.propertyId]);

  // }

}
