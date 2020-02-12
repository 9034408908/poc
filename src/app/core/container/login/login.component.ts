import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm: FormGroup;
returnUrl: string;
data1:any;
  constructor( private fb:FormBuilder, private myRoute: Router,
    private authenticationService: AuthenticationService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.myForm=this.fb.group({
    UserCode:['', [Validators.required]],
    Password: ['', [Validators.required]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
  }

  get f() { return this.myForm.controls; }
  
  public onSubmit(data) {
    debugger;
    this.authenticationService.login(this.f.UserCode.value, this.f.Password.value)
      .pipe(first()).subscribe(data => {
        console.log('----+++',this.myForm.value)
        this.myRoute.navigate(['/portal/home']);
      })
    }
    //this.data1.push(this.myForm.value)
  //  if (this.myForm.valid) {
  //   console.log('----+++',data)
  //   this.myRoute.navigate(['/portal/home']);
  //  }

}
