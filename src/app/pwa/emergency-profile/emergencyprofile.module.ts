import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyProfileRoutingModule } from './emergencyprofile-routing.module';
import { EmergencyProfileComponent } from './emergencyprofile.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [EmergencyProfileComponent],
  imports: [CommonModule, EmergencyProfileRoutingModule, TooltipModule],
})
export class EmergencyProfileModule {}
