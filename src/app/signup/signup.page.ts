import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonDataService } from '../services/common-data.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  countryData: any;
  phoneNumber = '';

  constructor(public router:Router, 
    private http:HttpClient, 
    private commonData:CommonDataService) {

    this.countryData = [];

   }

  ngOnInit() {

    this.getALLCountries();
  }


  RedirectTo(page){

    this.router.navigateByUrl(page);
  }




  getALLCountries() {
    //Get saved list of students
    this.commonData.getCountries().subscribe(response => {

      this.countryData = response;
      console.log(this.countryData);
    })
  }


}
