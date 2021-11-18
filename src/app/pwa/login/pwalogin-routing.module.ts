import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwaLoginComponent } from './pwalogin.component';

const routes: Routes = [
	{
		path : '',
		component : PwaLoginComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwaLoginRoutingModule { }
