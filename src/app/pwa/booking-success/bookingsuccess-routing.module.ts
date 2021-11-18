import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingSuccessComponent } from './bookingsuccess.component';

const routes: Routes = [
	{
		path : '',
		component : BookingSuccessComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingSuccessRoutingModule { }
