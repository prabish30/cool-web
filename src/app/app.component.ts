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
    const navEndEvents = router.events.pipe(filter(event => event instanceof NavigationEnd))
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-ZLWVNCME1T', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}
