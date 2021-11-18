import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeleHealthProfileRoutingModule } from './telehealthprofile-routing.module';
import { TeleHealthProfileComponent } from './telehealthprofile.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [TeleHealthProfileComponent],
  imports: [CommonModule, TeleHealthProfileRoutingModule, TooltipModule],
})
export class TeleHealthProfileModule {}
