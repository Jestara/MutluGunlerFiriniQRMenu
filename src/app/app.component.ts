import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'MutluGunlerFiriniQRMenu';

  location: any;
  routerSubscription: any;


  ngOnInit(): void {
    this.recallJsFuntions();
  }
  constructor(private router: Router) {
  }

  recallJsFuntions() {
    this.router.events
    .subscribe((event) => {
        if ( event instanceof NavigationStart ) {
            $('.ct-preloader').fadeIn('slow');
        }
    });
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    .subscribe(event => {
        $.getScript('assets/js/main.js');
        $('.ct-preloader').fadeOut('slow');
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}

}
