import { NgModule } from '@angular/core';
import { NbAlertModule, NbDialogModule, NbWindowModule, NbDatepickerModule, NbContextMenuModule, NbTabsetModule, NbMenuModule, NbCardModule, NbSelectModule, NbButtonModule, NbIconModule, NbInputModule, NbCheckboxModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbMomentDateModule } from '@nebular/moment';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { AutocompleteModule } from 'ng2-input-autocomplete';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DaySheetComponent } from './day-sheet/day-sheet.component';
import { UnmatchedErasComponent } from './unmatched-eras/unmatched-eras.component';
import { AccountsReceivableComponent } from './accounts-receivable/accounts-receivable.component';
import { PatientStatementsComponent, ButtonViewComponent } from './patient-statements/patient-statements.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import { LiveclaimsComponent } from './liveclaims/liveclaims.component';

import { WikipediaService } from './liveclaims/wiki.service';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbSelectModule,
    NbButtonModule,
    NbIconModule,
    NbCheckboxModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbTabsetModule,
    NbContextMenuModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbDatepickerModule,
    NbMomentDateModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    AutocompleteModule,
    NbWindowModule,
    NbDialogModule,
    NbAlertModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    PagesComponent,
    DaySheetComponent,
    UnmatchedErasComponent,
    AccountsReceivableComponent,
    PatientStatementsComponent,
    FeeScheduleComponent,
    LiveclaimsComponent,
    ButtonViewComponent,
  ],
  providers: [WikipediaService],
  entryComponents: [
    ButtonViewComponent,
  ],
})
export class PagesModule {
}
