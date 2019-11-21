import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-accounts-receivable',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.scss']
})
export class AccountsReceivableComponent implements OnInit, OnDestroy {
  selectedItem1 = '1';
  selectedItem2 = '1';
  selectedItem3 = '1';
  items = [
    { title: 'Print' },
    { title: 'Export' },
  ];
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
    if ( event.tabTitle == 'Summary' ) {
      const tablebox = document.getElementById('table-box');
      tablebox.style.display = 'none';
      const chartbox = document.getElementById('chart-box');
      chartbox.style.display = 'block';
    } else if ( event.tabTitle == 'Insurance' ) {
      const chartbox = document.getElementById('chart-box');
      chartbox.style.display = 'none';
      const tablebox = document.getElementById('table-box');
      tablebox.style.display = 'block';

      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          payerid: {
            title: 'Payer ID',
            type: 'string',
            width: '10%',
          },
          company: {
            title: 'Insurance Company',
            type: 'string',
            width: '20%',
          },
          firstrange: {
            title: '0-30 Days',
            type: 'string',
            width: '10%',
          },
          secondrange: {
            title: '31-60 Days',
            type: 'string',
            width: '10%',
          },
          thirdrange: {
            title: '61-90 Days',
            type: 'string',
            width: '10%',
          },
          fourthrange: {
            title: '91-120 Days',
            type: 'string',
            width: '10%',
          },
          fiverange: {
            title: '121+ Days',
            type: 'string',
            width: '10%',
          },
          total: {
            title: 'Total',
            type: 'string',
            width: '10%',
          },
        },
      }
    } else {
      const chartbox = document.getElementById('chart-box');
      chartbox.style.display = 'none';
      const tablebox = document.getElementById('table-box');
      tablebox.style.display = 'block';

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
            width: '10%',
          },
          birthday: {
            title: 'Date of Birth',
            type: 'string',
            width: '10%',
          },
          phone: {
            title: 'Phone',
            type: 'string',
            width: '10%',
          },
          firstrange: {
            title: '0-30 Days',
            type: 'string',
            width: '10%',
          },
          secondrange: {
            title: '31-60 Days',
            type: 'string',
            width: '10%',
          },
          thirdrange: {
            title: '61-90 Days',
            type: 'string',
            width: '10%',
          },
          fourthrange: {
            title: '91-120 Days',
            type: 'string',
            width: '10%',
          },
          fiverange: {
            title: '121+ Days',
            type: 'string',
            width: '10%',
          },
          total: {
            title: 'Total',
            type: 'string',
            width: '10%',
          },
        },
      };
    }
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData, private theme: NbThemeService) {
    // const data = this.service.getData();
    const data1 = [
      {
        patient: "Leanne Graham",
        phone: 133022133,
        birthday: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        secondrange: "$0.00",
        thirdrange: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        firstrange: "$1,200.00",
        total: "$1,200.00",
        fourthrange: "$0.00",
        payerid: 'MND123'
      },
      {
        patient: "Leanne Graham",
        phone: 133022133,
        birthday: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        secondrange: "$0.00",
        thirdrange: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        firstrange: "$1,200.00",
        total: "$1,200.00",
        fourthrange: "$0.00",
        payerid: 'MND123'
      },
      {
        patient: "Leanne Graham",
        phone: 133022133,
        birthday: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        secondrange: "$0.00",
        thirdrange: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        firstrange: "$1,200.00",
        total: "$1,200.00",
        fourthrange: "$0.00",
        payerid: 'MND123'
      },
    ];
    this.source.load(data1);
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['0-30 Days', '31-60 Days', '61-90 Days', '91-120 Days', '120+ Days', 'All'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 155],
          label: 'Patient',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 1.0),
          borderColor: colors.primary,
        }, {
          data: [28, 48, 40, 19, 86, 190],
          label: 'Insurance Company',
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 1.0),
          borderColor: colors.danger,
        },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ///////chart//////
  data: any;
  options: any;
  themeSubscription: any;

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
