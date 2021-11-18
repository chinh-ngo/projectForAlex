import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingSuccessRoutingModule } from './bookingsuccess-routing.module';
import { BookingSuccessComponent } from './bookingsuccess.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [BookingSuccessComponent],
  imports: [CommonModule, BookingSuccessRoutingModule, TooltipModule],
})
export class BookingSuccessModule {}
