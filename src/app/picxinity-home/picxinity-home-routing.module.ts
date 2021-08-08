import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicxinityHomePage } from './picxinity-home.page';

const routes: Routes = [
  {
    path: '',
    component: PicxinityHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicxinityHomePageRoutingModule {}
