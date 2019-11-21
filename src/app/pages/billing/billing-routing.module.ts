import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingComponent } from './billing.component';
import { LiveClaimsFeedComponent } from './live-claims-feed/live-claims-feed.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';

const routes: Routes = [{
  path: '',
  component: BillingComponent,
  children: [ {
    path: 'live-claims-feed',
    component: LiveClaimsFeedComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, {
    path: 'typography',
    component: TypographyComponent,
  }, {
    path: 'search-fields',
    component: SearchComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
