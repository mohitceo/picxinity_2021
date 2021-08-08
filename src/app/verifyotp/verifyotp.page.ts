import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.page.html',
  styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
  constructor(public router:Router) { }

  ngOnInit() {
  }


  RedirectTo(page){

    this.router.navigateByUrl(page);
  }


}
