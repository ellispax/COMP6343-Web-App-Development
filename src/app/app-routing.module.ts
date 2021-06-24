import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import {BackendComponent} from './backend/backend.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  
  {path: 'search', component: BackendComponent},
  {path:'about_us',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'',component:HomeComponent},
  {path:'detail/:pk',component:ProductDetailComponent},
  {path:'user-profile',component:UserProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
