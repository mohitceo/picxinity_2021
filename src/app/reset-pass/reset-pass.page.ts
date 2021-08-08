import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }


  RedirectTo(page){

    this.router.navigateByUrl(page);
  }

}
