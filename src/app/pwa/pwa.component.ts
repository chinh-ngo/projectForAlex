import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  AfterViewInit,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  Params,
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
// import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PwaComponent implements OnInit {  
  pwaShow: boolean = true;
  constructor(
    @Inject(DOCUMENT) private document,
    // public commonService: CommonServiceService,
    private route: ActivatedRoute,
    public Router: Router
  ) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/pwa/forgot-pass' ||
          event.url === '/pwa/lock-screen' ||
          event.url === '/pwa/login-form' ||
          event.url === '/pwa/register' ||
          event.url === '/pwa/error-first' ||
          event.url === '/pwa/error-second'
        ) {
          this.pwaShow = false;
        } else {
          this.pwaShow = true;
        }
      }
    });
  }
  ngOnInit(): void {
    // this.commonService.nextmessage('admin');
    let scope = this;
    // setTimeout(() => {
    //   scope.Router.navigateByUrl('/pwa/booking-success');
    // }, 100);
  }
}
