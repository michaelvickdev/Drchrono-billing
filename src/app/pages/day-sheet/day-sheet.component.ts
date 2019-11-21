import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-day-sheet',
  templateUrl: './day-sheet.component.html',
  styleUrls: ['./day-sheet.component.scss']
})
export class DaySheetComponent implements OnInit {
  fromDate = new Date();
  toDate = new Date();

  selectedItem1 = '1';
  selectedItem2 = '1';
  selectedItem3 = '1';
  selectedItem4 = '1';
  selectedItem5 = '1';
  selectedItem6 = '1';
  selectedItem7 = '1';
  selectedItem8 = '1';

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,
    columns:{},
  };

  selectTab(event) {
    if ( event.tabTitle == 'Grand Totals' ) {
      this.showElement('1');
    } else if ( event.tabTitle == 'Charges' ) {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          patient: {
            title: 'Patient',
            type: 'string',
            editable: false,
            width: '10%',
          },
          sdate: {
            title: 'Date of Service',
            type: 'string',
            width: '20%',
          },
          claimid: {
            title: 'Claim ID',
            type: 'string',
            width: '15%',
          },
          provider: {
            title: 'Provider',
            type: 'string',
            width: '15%',
          },
          office: {
            title: 'Office',
            type: 'string',
            width: '10%',
          },
          debit: {
            title: 'Debit',
            type: 'string',
            width: '10%',
          },
          note: {
            title: 'Note',
            type: 'string',
            width: '10%',
          },
        },
      }
      this.showElement('4');
    } else if ( event.tabTitle == 'Credits & Adjustments' ) {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          patient: {
            title: 'Patient',
            type: 'string',
            editable: false,
            width: '10%',
          },
          sdate: {
            title: 'Date of Service',
            type: 'string',
            width: '15%',
          },
          claimid: {
            title: 'Claim ID',
            type: 'string',
            width: '10%',
          },
          provider: {
            title: 'Provider',
            type: 'string',
            width: '10%',
          },
          office: {
            title: 'Office',
            type: 'string',
            width: '5%',
          },
          payer: {
            title: 'Payer',
            type: 'string',
            width: '5%',
          },
          check: {
            title: 'Check #',
            type: 'string',
            width: '10%',
          },
          adjustment: {
            title: 'Adjustments',
            type: 'string',
            width: '10%',
          },
          note: {
            title: 'Note',
            type: 'string',
            width: '5%',
          },
          reason: {
            title: 'Adjustment Reason',
            type: 'string',
            width: '20%',
          },
        },
      }
     this.showElement('2');
    } else if ( event.tabTitle == 'Patient Payment') {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          patient: {
            title: 'Patient',
            type: 'string',
            editable: false,
            width: '10%',
          },
          sdate: {
            title: 'Date of Service',
            type: 'string',
            width: '15%',
          },
          claimid: {
            title: 'Claim ID',
            type: 'string',
            width: '10%',
          },
          provider: {
            title: 'Provider',
            type: 'string',
            width: '5%',
          },
          office: {
            title: 'Office',
            type: 'string',
            width: '5%',
          },
          method: {
            title: 'Method',
            type: 'string',
            width: '10%',
          },
          trace: {
            title: 'Trace #',
            type: 'string',
            width: '10%',
          },
          crated: {
            title: 'Created By',
            type: 'string',
            width: '10%',
          },
          payment: {
            title: 'Patient Payment',
            type: 'string',
            width: '15%',
          },
          note: {
            title: 'Note',
            type: 'string',
            width: '5%',
          },
        },
      }
      this.showElement('3');
    } else if ( event.tabTitle == 'Default' ) {
      console.log('default');
    } else {
      console.log('analysis');
    }
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    const premonth =  this.toDate.getMonth()-1;
    this.fromDate.setMonth(premonth);
    // const data = this.service.getData();
    const data = [];
    this.source.load(data);
  }

  ngOnInit() {
  }
  showElement(type) {
    document.getElementById('combo1').style.display = 'none';
    document.getElementById('combo2').style.display = 'none';
    document.getElementById('combo3').style.display = 'none';
    document.getElementById('combo4').style.display = 'none';
    document.getElementById('combo5').style.display = 'none';
    if ( type == '1' ) {
      document.getElementById('combo1').style.display = 'inline-block';
      document.getElementById('combo4').style.display = 'inline-block';
      document.getElementById('combo5').style.display = 'inline-block';
    } else if (type == '2') {
      document.getElementById('combo1').style.display = 'inline-block';
    } else if (type == '3') {
      document.getElementById('combo2').style.display = 'inline-block';
      document.getElementById('combo3').style.display = 'inline-block';
      document.getElementById('combo5').style.display = 'inline-block';
    } else if (type == '4') {
      document.getElementById('combo4').style.display = 'inline-block';
    }
  }
}
