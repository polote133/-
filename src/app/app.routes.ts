import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { IgViewComponent } from './ig-view/ig-view.component';
import { IgView1Component } from './ig-view-1/ig-view-1.component';
import { IgView2Component } from './ig-view-2/ig-view-2.component';
import { IgView3Component } from './ig-view-3/ig-view-3.component';
import { IgView4Component } from './ig-view-4/ig-view-4.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ig-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'ig-view', component: IgViewComponent, data: { text: 'Ig-View' } },
  { path: 'ig-view-1', component: IgView1Component, data: { text: 'Ig-View-1' } },
  { path: 'ig-view-2', component: IgView2Component, data: { text: 'Ig-View-2' } },
  { path: 'ig-view-3', component: IgView3Component, data: { text: 'Ig-View-3' } },
  { path: 'ig-view-4', component: IgView4Component, data: { text: 'Ig-View-4' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
