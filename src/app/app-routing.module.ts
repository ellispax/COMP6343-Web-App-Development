import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AccommodationService } from './services/accommodation.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent  } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: '', component: PropertyListComponent},
  {path: 'listings', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  //{path: '**', component: PropertyListComponent}
  //{path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
 
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
