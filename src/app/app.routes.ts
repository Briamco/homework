import { Routes } from '@angular/router';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';

export const routes: Routes = [
  {path: '', component: InterpolationComponent},
  {path: 'interpolation', component: InterpolationComponent},
];
