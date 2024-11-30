import { Component } from '@angular/core';
import { ParallaxDirective } from '../parallax/parallax.directive';

@Component({
  selector: 'portfolio',
  templateUrl: 'portfolio.component.html',
  imports: [
    ParallaxDirective,
  ]
})
export class PortfolioComponent {
}
