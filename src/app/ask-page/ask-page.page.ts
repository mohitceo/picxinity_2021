import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-page',
  templateUrl: './ask-page.page.html',
  styleUrls: ['./ask-page.page.scss'],
})
export class AskPagePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }


  RedirectTo(page){

    this.router.navigateByUrl(page);
  }


}
