import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fader],
})
export class AppComponent {
  title = 'Angular-Portfolio';
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
