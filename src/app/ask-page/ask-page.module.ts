import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskPagePageRoutingModule } from './ask-page-routing.module';

import { AskPagePage } from './ask-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskPagePageRoutingModule
  ],
  declarations: [AskPagePage]
})
export class AskPagePageModule {}
