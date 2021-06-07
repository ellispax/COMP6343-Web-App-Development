import { Component, OnInit } from '@angular/core';
import {TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  email?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.email = user.email;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
