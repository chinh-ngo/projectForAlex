import { Component, OnInit,OnDestroy } from '@angular/core';

import { Location } from '@angular/common';

import { CommonServiceService } from './../../common-service.service';



@Component({
  selector: 'app-bookingsuccess',
  templateUrl: './telehealthprofile.component.html',
  styleUrls: ['./telehealthprofile.component.css']
})
export class TeleHealthProfileComponent implements OnInit,OnDestroy {

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