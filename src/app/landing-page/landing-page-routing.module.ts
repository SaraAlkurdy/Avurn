import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routesLanding: Routes = [
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routesLanding)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
