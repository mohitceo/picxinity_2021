import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.page.html',
  styleUrls: ['./get-start.page.scss'],
})
export class GetStartPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }


  RedirectTo(page){

    this.router.navigateByUrl(page);
  }

}
