import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UccRoutingModule } from './ucc-routing.module';
import { UccComponent } from './ucc.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [UccComponent],
  imports: [CommonModule, UccRoutingModule, TooltipModule],
})
export class UccModule {}
