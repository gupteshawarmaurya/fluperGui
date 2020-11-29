import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userdata:any=[];
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    console.log("start");
    this.apiService.get('http://localhost:3001/getapi/category')
      .subscribe((suc) => {
        this.userdata=suc.data.responseData;
         console.log(suc, suc.status) }, (error) => { });
  }
}
