import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare var require: any;
@Component({
  selector: 'app-pool-question',
  templateUrl: './pool-question.component.html',
  styleUrls: ['./pool-question.component.css']
})
export class PoolQuestionComponent implements OnInit {
  answer = true;
unChecked = false;
checked = true;
email:string;
reply:string;
//private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
  constructor(private router : Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.router.navigate(['app-login']);
  }

 onSubmit(){
   var user = sessionStorage.getItem("user");
   var id = Math.floor((Math.random()));
   //alert("your response submitted successfully" + this.answer + user);
   const axios = require('axios');
   if(this.answer == true)
   {
     this.reply = "yes";
   }
   else{
     this.reply ="no";
   }
   axios.post('http://localhost:3000/results', {
     id: id,
    name: user,
    response: this.reply,
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
}); 
    }

}
