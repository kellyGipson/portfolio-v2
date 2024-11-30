import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const PORTFOLIO_ROUTE = 'portfolio';
export const routes: Routes = [
  {
    path: PORTFOLIO_ROUTE,
    component: PortfolioComponent,
  },
  {
    path: '**',
    redirectTo: '/' + PORTFOLIO_ROUTE,
    pathMatch: 'full',
  }
];
