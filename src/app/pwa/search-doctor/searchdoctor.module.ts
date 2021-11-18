import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDoctorRoutingModule } from './searchdoctor-routing.module';
import { SearchDoctorComponent } from './searchdoctor.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [SearchDoctorComponent],
  imports: [CommonModule, SearchDoctorRoutingModule, TooltipModule],
})
export class SearchDoctorModule {}
