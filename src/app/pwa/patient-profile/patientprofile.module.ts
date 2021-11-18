import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientProfileRoutingModule } from './patientprofile-routing.module';
import { PatientProfileComponent } from './patientprofile.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [PatientProfileComponent],
  imports: [CommonModule, PatientProfileRoutingModule, TooltipModule],
})
export class PatientProfileModule {}
