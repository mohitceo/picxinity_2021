import { Component, ViewChild  } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  @ViewChild('starterSlide')  slides: IonSlides;

  public next(){
    this.slides.slideNext();
  }

  public prev(){
    this.slides.slidePrev();
  }
  constructor(public router:Router) {


  }

  RedirectTo(page){

    this.router.navigateByUrl(page);
  }
}
