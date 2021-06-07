import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from 'src/app/model/property';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property>{

constructor(private router: Router, private accommodationService: AccommodationService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Property>|Property {
    const propId = route.params['id'];
    return this.accommodationService.getProperty(+propId)
  }

}

// .pipe(
//   catchError(error => {
//     this.router.navigate(['/']);
//     return of(null);
//   })
// );
