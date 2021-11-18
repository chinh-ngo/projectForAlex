import { Component, OnInit,OnDestroy } from '@angular/core';

import { Location } from '@angular/common';

import { CommonServiceService } from './../../common-service.service';



@Component({
  selector: 'app-bookingsuccess',
  templateUrl: './bookingsuccess.component.html',
  styleUrls: ['./bookingsuccess.component.css']
})
export class BookingSuccessComponent implements OnInit,OnDestroy {

  constructor(private location:Location,public commonSerivce:CommonServiceService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }
}