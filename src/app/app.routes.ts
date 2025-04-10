import { Routes } from '@angular/router';
import { PlanningPokerComponent } from 'ng-planning-poker';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'poker',
    component: PlanningPokerComponent,
  },
];
