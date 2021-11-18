import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeleHealthProfileComponent } from './telehealthprofile.component';

const routes: Routes = [
	{
		path : '',
		component : TeleHealthProfileComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeleHealthProfileRoutingModule { }
