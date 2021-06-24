import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly apiurl="http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  getListing():Observable<any[]>{
    return this.http.get<any[]>(this.apiurl+'listings/home');
  }

  getListing_detail(pk):Observable<any[]>{
    return this.http.get<any[]>(this.apiurl+'listings/<int:'+pk+'>'); 
  }
  getListing_detail1(pk):Observable<any>{
    return this.http.get(this.apiurl+`listings/${pk}/`); 
  }
  
  submit_contact(userData){
    return this.http.post<any>(this.apiurl+'contact_us/',userData);

  }
  getRealtor(pk):Observable<any[]>{
    return this.http.get<any[]>(this.apiurl+`realtors/${pk}/`);
  }

}
