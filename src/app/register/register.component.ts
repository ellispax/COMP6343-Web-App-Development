import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  // form = new FormGroup({
  //   username:new FormControl('',Validators.required),

  // })
  // isSuccessful = false;
  // isSignupFailed = false;
  // errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
    // this.form = this.formBuilder.group({
    //   username: ['',Validators.required],
    //   password: ['',[Validators.required,Validators.minLength(6)]],
    //   email: ['',[Validators.required,Validators.email]],
    //   first_name:['',Validators.required],
    //   last_name:['',Validators.required],

    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/users/register', this.form.getRawValue())
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        //   this.isSuccessful = true;
        // this.isSignupFailed = false;
      },
      // err =>{
      //   this.errorMessage = err.error.message;
      //   this.isSignupFailed = true;
      //   console.log('error');
        
      // }

        );
  }
}
