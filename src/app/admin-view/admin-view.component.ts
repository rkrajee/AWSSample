import { Component, OnInit } from '@angular/core';
import { ResponseClass } from '../ResponseClass';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
title ='List of users with their interest';
  responseClass : ResponseClass[];
  data : string[];
  constructor(private http : HttpClient,private router : Router) { }

    //getDetails() { 
      
    //s }
    logout()
    {
      sessionStorage.removeItem('user');
      this.router.navigate(['app-login']);
    }
  ngOnInit() {
    this.http.get('http://localhost:3000/results')
      .subscribe(res => this.data = res as string[]);
  }

}
