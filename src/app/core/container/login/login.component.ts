import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../auth/auth.service';
import { PwaService } from 'src/app/services/pw.service';

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
    private authenticationService: AuthenticationService, private route: ActivatedRoute,
    public Pwa: PwaService) { }

  ngOnInit() {
    this.myForm=this.fb.group({
    UserCode:['', [Validators.required]],
    Password: ['', [Validators.required]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
  }

  get f() { return this.myForm.controls; }

 
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

  public onSubmit(data) {
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
