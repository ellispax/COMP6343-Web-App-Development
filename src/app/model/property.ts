import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id: number;
  Name: string;
  Location: string;
  Type: string;
  Style: string;
  Price: number;
  Baths: number;
  Beds: number;
  Sqft: number;
  Lot: number;
  Image: string;
  Description: string;
  Landlord: string;
  LandlordPic: string;
  LandlordContact: number;
  Contact: number;
  FloorNumber: number;
  Parking: string;
  Condition: string;
  YearBuilt: number;
  Pool: string;
  AC: string;

}
