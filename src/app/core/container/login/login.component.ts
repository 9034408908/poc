import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm: FormGroup;
data1:any;
  constructor( private fb:FormBuilder, private myRoute: Router) { }

  ngOnInit() {
    this.myForm=this.fb.group({
    UserCode:['', [Validators.required]],
    Password: ['', [Validators.required]]
    });
  }

  public onSubmit(data) {
    //this.data1.push(this.myForm.value)
   if (this.myForm.valid) {
    console.log('----+++',data)
    this.myRoute.navigate(['/portal/home']);
   }

  }
}
