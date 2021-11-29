import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomenewComponent } from './homenew.component';
import { HomeSliderTwoRoutingModule } from './homenew-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [ HomenewComponent],
  imports: [
    CommonModule,
    HomeSliderTwoRoutingModule,
    SlickCarouselModule
  ]
})
export class HomeSliderTwoModule { }
