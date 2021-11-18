import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UccComponent } from './ucc.component';

const routes: Routes = [
	{
		path : '',
		component : UccComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UccRoutingModule { }
