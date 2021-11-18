import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwaLoginRoutingModule } from './pwalogin-routing.module';
import { PwaLoginComponent } from './pwalogin.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [PwaLoginComponent],
  imports: [CommonModule, PwaLoginRoutingModule, TooltipModule],
})
export class PwaLoginModule {}
