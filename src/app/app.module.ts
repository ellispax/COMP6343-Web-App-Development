import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {BackendComponent} from './backend/backend.component';
import {ProductsComponent} from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { SharedService } from './shared.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
// 


@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    ProductsComponent,
    NavComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactUsComponent,
    HomeProductComponent,
    UserProfileComponent,
    ProductDetailComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
