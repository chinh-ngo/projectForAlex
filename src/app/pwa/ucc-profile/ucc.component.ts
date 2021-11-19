import { Component, OnInit,OnDestroy } from '@angular/core';

import { Location } from '@angular/common';

import { CommonServiceService } from './../../common-service.service';



@Component({
  selector: 'app-bookingsuccess',
  templateUrl: './ucc.component.html',
  styleUrls: ['./ucc.component.css']
})
export class UccComponent implements OnInit,OnDestroy {

  constructor(private location:Location,public commonSerivce:CommonServiceService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  showSidebar(event:any){
    document.getElementById("sidebar-menu").style.position = "absolute";
    document.getElementById("sidebar-menu").style.left = "0px";
  }
  closeSidebar(event:any){
    document.getElementById("sidebar-menu").style.position = "absolute";
    document.getElementById("sidebar-menu").style.left = "-293px";

  }
}