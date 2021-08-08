import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskPagePage } from './ask-page.page';

const routes: Routes = [
  {
    path: '',
    component: AskPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskPagePageRoutingModule {}
