import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {


  model: any = {
    firstName: "",
    lastName: "",
    userName:"",
    email: "",
    multipleEmail:[],
    gender:"",
    dob:"",
    fullAddress: {
      address: "",
      city: "",
      state: "",
      zipCode: ""
    },
    phoneNo:""
  };
 
  constructor(private apiService: ApiService,private router:Router) { }

  ngOnInit() {
    console.log("start");
    this.apiService.get('http://localhost:3001/getapi/category')
      .subscribe((suc) => {
      
         console.log(suc, suc.status) }, (error) => { });
  }


  addEmail() {
    this.router.navigate(['/dashboard']);
    if(this.model.email){
    this.model.multipleEmail.push({ email: this.model.email });
    this.model.email="";
    }
  }
  deleteEmail(id: any) {
    this.model.multipleEmail.splice(id, 1);
  }
  submitForm(){
    this.apiService.post('http://localhost:3001/postapi/category',this.model)
    .subscribe((suc) => {
       console.log(suc, suc.status) ;
       this.router.navigate(['/dashboard']);
    }, (error) => { });

  }
}
