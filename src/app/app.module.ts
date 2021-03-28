import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AccommodationService } from './services/accommodation.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavigationBarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AccommodationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
