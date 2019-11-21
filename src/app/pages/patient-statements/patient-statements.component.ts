import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { SmartTableData } from '../../@core/data/smart-table';
import { WikipediaService } from '../liveclaims/wiki.service';

////////////
@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = 'preview';
  }

  onClick() {
    alert('Hello!');
  }
}
///////
@Component({
  selector: 'ngx-patient-statements',
  templateUrl: './patient-statements.component.html',
  styleUrls: ['./patient-statements.component.scss']
})
export class PatientStatementsComponent implements OnInit {
  rowcnt;
  selectedItem;
  dueDate;
  selectedRows;
  selcetedRowscnt = '0';
  wikiItems: any[] = [];
  wikiItems1: any[] = [];
  config: any = {'class': 'autoinput', 'max': 2, 'placeholder': 'Patient'};
  config1: any = {'class': 'autoinputone', 'max': 2, 'placeholder': 'Patient Group'};
  selectedItem1 = '1';
  items = [
    { title: 'Print PDF' },
    { title: 'Print Transactions' },
    { title: 'Print Itemize Statement' },
    { title: 'Export CSV' },
  ];
  settings = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      delete: false,
      select:false,
    },
    hideSubHeader: true,
    columns: {
      patient: {
        title: 'Patient',
        type: 'string',
        editable: false,
        width: '8%',
      },
      chartid: {
        title: 'Chart ID',
        type: 'string',
        width: '8%',
      },
      lastappt: {
        title: 'Last Appt',
        type: 'string',
        width: '8%',
      },
      upcoming: {
        title: 'Upcomming Appt',
        type: 'string',
        width: '100px',
      },
      totalstmts: {
        title: 'Total Stmts',
        type: 'string',
        width: '5%',
      },
      laststmts: {
        title: 'Last Stmt',
        type: 'string',
        width: '5%',
      },
      lastamt: {
        title: 'Last Payment Amt',
        type: 'string',
        width: '15%',
      },
      lastposted: {
        title: 'Last Payment Posted',
        type: 'string',
        width: '15%',
      },
      unallocated: {
        title: 'Unallocated',
        type: 'string',
        width: '8%',
      },
      stmtbal: {
        title: 'Stmt Bal',
        type: 'string',
        width: '5%',
      },
      lastupdated: {
        title: 'Last Updated',
        type: 'string',
        width: '8%',
      },
      button: {
        title: ' ',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`)
          });
        }
      },
    },
  };

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }
  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    this.selcetedRowscnt = this.selectedRows.length;
  }

  selectTab(event) {
    if ( event.tabTitle == 'Default' ) {
      console.log('default');
    } else {
      console.log('analysis');
    }
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private autoservice: WikipediaService, private service: SmartTableData, private dialogService: NbDialogService,) {
    // const data = this.service.getData();
    const data = [
      {
        patient: "Leanne Graham",
        chartid: 133022133,
        lastappt: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        unallocated: "$0.00",
        stmtbal: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        ptline: "$1,200.00",
        claim: "$1,200.00",
        exp: "$0.00",
        button: 'preview',
      },
      {
        patient: "Leanne Graham",
        chartid: 133022133,
        lastappt: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        unallocated: "$0.00",
        stmtbal: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        ptline: "$1,200.00",
        claim: "$1,200.00",
        exp: "$0.00",
        button: 'preview',
      },
      {
        patient: "Leanne Graham",
        chartid: 133022133,
        lastappt: "11/11/2019 04:45PM",
        upcoming: "",
        totalstmts: "0",
        laststmts: "",
        lastamt: "",
        lastposted: "",
        unallocated: "$0.00",
        stmtbal: "$400.00",
        lastupdated: "Feb 8, 2018 7:48:59 AM",
        ptline: "$1,200.00",
        claim: "$1,200.00",
        exp: "$0.00",
        button: 'preview',
      },
    ];
    this.rowcnt = '1 - ' + data.length + ' OF ' + data.length;
    this.source.load(data);
  }
  onSelect(item: any) {
    this.selectedItem = item;
  }

  search (term: string) {
    this.autoservice.search(term).subscribe(e => this.wikiItems = e, error => console.log(error));
  }

  search1 (term: string) {
    this.autoservice.search(term).subscribe(e => this.wikiItems1 = e, error => console.log(error));
  }
  ngOnInit() {
    var node = document.createElement("LI");
    var buttonnode = document.createElement("BUTTON");
    var iconnode = document.createElement("I");
    iconnode.classList.add("fas");
    iconnode.classList.add("fa-question");
    iconnode.classList.add("iconstyle");
    node.classList.add("video-content"); 
    buttonnode.classList.add("btn");
    buttonnode.classList.add("btn-primary");
    buttonnode.classList.add("video-button");
    buttonnode.setAttribute("id", "animatiobutton");
    buttonnode.appendChild(iconnode);
    node.appendChild(buttonnode);
    document.getElementById('mytab').firstChild.appendChild(node);
  }

  showDetail(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Statement Note' });
  }
}
