import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id: number;
  Name: string;
  Location: string;
  Type: string;
  Price: number;
  Baths: number;
  Beds: number;
  Sqft: number;
  Image: string;
  Description: string;
}
