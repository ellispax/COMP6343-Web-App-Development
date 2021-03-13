import { Component } from "@angular/core";



@Component({
  selector: 'app-property-card',
  //template: `<h1>I am a card</h1>`,
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {font-weight: normal;}']
  styleUrls: ['property-card.component.css']
}

)
export class PropertyCardComponent {

  Property: any = {
    "Location":"Kota Jakarta Timur",
    "Price":5000000,
    "Beds":3,
    "Baths":2,
    "sqft":2916
  }

}
