import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyProfileComponent } from './emergencyprofile.component';

const routes: Routes = [
	{
		path : '',
		component : EmergencyProfileComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyProfileRoutingModule { }
