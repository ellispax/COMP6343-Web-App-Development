import { Component, OnInit} from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {ActivatedRoute} from '@angular/router';
import {Emitters} from '../emitters/emitters';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  form: FormGroup;

  constructor(private service:SharedService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    
  ) { }
  listing_detail;
  error;
  realtor_detail;

  ngOnInit(): void {
    this.loadDetail();
    this.form = this.formBuilder.group({
      listing: new FormControl(''),
      listing_id: new FormControl(''),
      name:new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone: new FormControl(''), 
      message:new FormControl('',Validators.required),
      user_id:new FormControl(''),
      realtor_email:new FormControl(''),

    // this.form = this.formBuilder.group({
    //   username: ['',Validators.required],
    //   password: ['',[Validators.required,Validators.minLength(6)]],
    //   email: ['',[Validators.required,Validators.email]],
    //   first_name:['',Validators.required],
    //   last_name:['',Validators.required],

    });
    this.loadRealtor();
    
    
    
  }

  loadRealtor(){
    
    const realtorid= +this.route.snapshot.paramMap.get('pk');
    this.service.getRealtor(realtorid).subscribe(
      data=>this.realtor_detail=data,
      error=>this.error=error
    )
  }

  loadDetail(){
    // this id property is what we have declared in the app.routing.module itself
    const listingid=+this.route.snapshot.paramMap.get('pk');
    this.service.getListing_detail1(listingid).subscribe(
      data=>this.listing_detail=data,
      error=>this.error=error
    )
  }
  submit():void{
    console.log(this.form.getRawValue());
    this.service.submit_contact(this.form.getRawValue()).subscribe(
      response=>console.log('Success!',response),
      error=>console.log("Error!",error)
    );
  }

  // submit(): void {
  //   this.http.post('http://localhost:8000/contact_us/', this.form.getRawValue())
  //     .subscribe(
  //       () => {
  //         this.router.navigate(['/about_us']);
  //       //   this.isSuccessful = true;
  //       // this.isSignupFailed = false;
  //     },
  //     // err =>{
  //     //   this.errorMessage = err.error.message;
  //     //   this.isSignupFailed = true;
  //     //   console.log('error');
        
  //     // }

  //       );
  // }

}
