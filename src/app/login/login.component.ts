import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient} from '@angular/common/http';
import {userDetails} from '/myUsers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  data: string[];
  userDetails : userDetails[];
    constructor(private router : Router,private http : HttpClient, private formBuilder: FormBuilder) { }
  
    ngOnInit() {
     // this.http.get('http://localhost:3001/users')
      //.subscribe(res => this.data = res as string[]);
      this.http.get('http://localhost:3001/users')
      .subscribe(res => this.userDetails = res as userDetails[]);
    }
  login() {
    
      var flag=0;
   for(var i=0;i<this.userDetails.length;i++)
   {
     //var value = this.data[i];
     if(this.userDetails[i].name ==this.email && this.userDetails[i].password==this.password)
     {
        flag =1;
        break;
      //this.router.navigate(['app-pool-question']);
     }
     
   }
   if(this.email == 'admin' && this.password == '123') {
    this.router.navigate(['app-admin-view']);
    }
    else if(flag==1)
    {
      this.router.navigate(['app-pool-question']);
    }
    else{
      alert("Invalid credentials.");
    }
    sessionStorage.setItem('user',this.email);
 /* if(this.email == 'qwe' && this.password == '123') {
  this.router.navigate(['app-pool-question']);
  }
  else if(this.email == 'admin' && this.password == '123') {
    this.router.navigate(['app-admin-view']);
    }
  else {
  alert("Invalid credentials.");
  }*/
  }
}
