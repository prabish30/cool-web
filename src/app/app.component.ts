import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cool-web';
  constructor(router: Router){
    console.info('INSIDE APP CONSTRUCTOR');
    const navEndEvents = router.events.pipe(filter(event => event instanceof NavigationEnd))
    navEndEvents.subscribe((event: NavigationEnd) => {
      console.info('URL AFTER REDIRECTS:', event.urlAfterRedirects);
      gtag('config', 'G-Y090ETQNZ4', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
  handleGreet() {
      console.info('Inside greet button click handler');
      gtag('config', 'G-Y090ETQNZ4', {
        eventName: 'greet',
        elementName: 'greet_btn'
      });
  }
}
