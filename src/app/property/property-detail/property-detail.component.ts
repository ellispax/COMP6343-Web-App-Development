import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { PropertyListComponent } from '../property-list/property-list.component';
import {Property} from 'src/app/model/property';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';



@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property = new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private accomodationService: AccommodationService
             ) { }




  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp']
      }
    )





    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.accomodationService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       },
    //     )
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // max-width 400
      // {
      //   breakpoint: 400,
      //   preview: false
      // }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/house1_room.jpg',
        medium: 'assets/images/house1_room.jpg',
        big: 'assets/images/house1_room.jpg'
      },
      {
        small: 'assets/images/house2.jpg',
        medium: 'assets/images/house2.jpg',
        big: 'assets/images/house2.jpg'
      },
      {
        small: 'assets/images/house3.jpg',
        medium: 'assets/images/house3.jpg',
        big: 'assets/images/house3.jpg'
      },{
        small: 'assets/images/house4.jpg',
        medium: 'assets/images/house4.jpg',
        big: 'assets/images/house4.jpg'
      },
      {
        small: 'assets/images/house5.jpg',
        medium: 'assets/images/house5.jpg',
        big: 'assets/images/house5.jpg'
      }
    ];

  }

  // onSelectNext() {
  //   this.propertyId += 1;
  //   this.router.navigate(['property-detail', this.propertyId]);

  // }

}
