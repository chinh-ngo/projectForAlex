import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomenewComponent } from './homenew.component';

const routes: Routes = [
  {
    path : '',
    component : HomenewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSliderTwoRoutingModule { }
