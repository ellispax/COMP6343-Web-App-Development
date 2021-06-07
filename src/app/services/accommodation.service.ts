import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Property } from 'src/app/model/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private http:HttpClient) {}

  getProperty(id: number){
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getAllProperties(): Observable<Property[]> {
      return this.http.get('data/properties.json').pipe(
        map(data => {
          const propertiesArray: Array<Property> = [];
          for (const id in data) {
            if (data.hasOwnProperty(id)) {
              propertiesArray.push(data[id]);
            }

          }
          return propertiesArray;
        })
      );
    }
}
