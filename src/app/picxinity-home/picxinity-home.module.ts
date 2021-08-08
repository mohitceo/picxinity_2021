import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicxinityHomePageRoutingModule } from './picxinity-home-routing.module';

import { PicxinityHomePage } from './picxinity-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicxinityHomePageRoutingModule
  ],
  declarations: [PicxinityHomePage]
})
export class PicxinityHomePageModule {}
