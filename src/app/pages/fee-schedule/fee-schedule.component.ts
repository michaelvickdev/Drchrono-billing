import { Component, OnInit, TemplateRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';

import { SmartTableData } from '../../@core/data/smart-table';
import { WikipediaService } from '../liveclaims/wiki.service';

@Component({
  selector: 'ngx-fee-schedule',
  templateUrl: './fee-schedule.component.html',
  styleUrls: ['./fee-schedule.component.scss']
})
export class FeeScheduleComponent implements OnInit {
  /////dialog////////////
  selectedCodeItem = '1';
  selectedOfficeItem;
  selectedUnitItem = '1';
  codeItems: any[] = [];
  codeItems1: any[] = [];
  codeconfig: any = {'class': 'autoinputcode', 'max': 2, 'placeholder': ''};
  codeconfig1: any = {'class': 'autoinputndccode', 'max': 2, 'placeholder': ''};
  ////auto complete////
  autocompleteItem: any = '';
  inputChanged: any = '';
  wikiItems: any[] = [];
  wikiItems1: any[] = [];
  wikiItems2: any[] = [];
  config: any = {'class': 'autoinput', 'max': 2, 'placeholder': 'CPT/HCPCS/Custom Procedure'};
  config9: any = {'class': 'autoinput', 'max': 2, 'placeholder': 'ICD-9 Procedure'};
  config10: any = {'class': 'autoinput', 'max': 2, 'placeholder': 'ICD-10 Procedure'};
  config1: any = {'class': 'autoinputone', 'max': 2, 'placeholder': 'Payer ID'};
  config2: any = {'class': 'autoinputtwo', 'max': 2, 'placeholder': 'Plan name'};
  selectedItem;
  ////////
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
    if ( event.tabTitle == 'ICD-9' ) {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          code: {
            title: 'ICD-9 Code',
            type: 'string',
            editable: false,
            width: '30%',
          },
          type: {
            title: 'Type',
            type: 'string',
            width: '15%',
          },
          picklist: {
            title: 'Picklist Category',
            type: 'string',
            width: '55%',
          },
        },
      }
    } else if ( event.tabTitle == 'ICD-10' ) {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          code: {
            title: 'ICD-10 Code',
            type: 'string',
            editable: false,
            width: '30%',
          },
          type: {
            title: 'Type',
            type: 'string',
            width: '15%',
          },
          picklist: {
            title: 'Picklist Category',
            type: 'string',
            width: '55%',
          },
        },
      }
    } else {
      this.settings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
        },
        hideSubHeader: true,
        columns: {
          procedure: {
            title: 'Procedure',
            type: 'string',
            editable: false,
            width: '10%',
          },
          type: {
            title: 'Type',
            type: 'string',
            width: '7%',
          },
          office: {
            title: 'Office',
            type: 'string',
            width: '8%',
          },
          insurance: {
            title: 'Insurance Payer',
            type: 'string',
            width: '10%',
          },
          price: {
            title: 'Price',
            type: 'string',
            width: '8%',
          },
          allowed: {
            title: 'Allowed',
            type: 'string',
            width: '8%',
          },
          modifiers: {
            title: 'Modifiers',
            type: 'string',
            width: '8%',
          },
          code: {
            title: 'NDC Code',
            type: 'string',
            width: '8%',
          },
          units: {
            title: 'NDC Units',
            type: 'string',
            width: '8%',
          },
          payerid: {
            title: 'Payer ID',
            type: 'string',
            width: '10%',
          },
          picklist: {
            title: 'Picklist',
            type: 'string',
            width: '10%',
          },
          note: {
            title: ' ',
            type: 'string',
            width: '5%',
          },
        },
      };
    }
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private dialogService: NbDialogService, private autoservice: WikipediaService, private service: SmartTableData) {
    // const data = this.service.getData();
    const data = [];
    this.source.load(data);
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: '' });
  }

  ngOnInit() {
    var node = document.createElement("LI");
    var buttonnode = document.createElement("BUTTON");
    var iconnode = document.createElement("I");
    iconnode.classList.add("fas");
    iconnode.classList.add("fa-play");
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

  onSelect(item: any) {
    this.selectedItem = item;
  }
 
  onInputChangedEvent(val: string) {
    this.inputChanged = val;
  }

  search (term: string) {
    this.autoservice.search(term).subscribe(e => this.wikiItems = e, error => console.log(error));
  }

  search1 (term: string) {
    this.autoservice.search(term).subscribe(e => this.wikiItems1 = e, error => console.log(error));
  }

  search2 (term: string) {
    this.autoservice.search(term).subscribe(e => this.wikiItems2 = e, error => console.log(error));
  }
  codesearch (term: string) {
    this.autoservice.search(term).subscribe(e => this.codeItems = e, error => console.log(error));
  }
  codesearch1 (term: string) {
    this.autoservice.search(term).subscribe(e => this.codeItems1 = e, error => console.log(error));
  }
  showControl() {
    document.getElementById('item3').style.display = 'none';
    document.getElementById('item4').style.display = 'none';
    document.getElementById('item5').style.display = 'none';
    document.getElementById('item7').style.display = 'none';
    document.getElementById('item8').style.display = 'none';
    document.getElementById('item9').style.display = 'none';
    document.getElementById('item10').style.display = 'none';
    document.getElementById('item11').style.display = 'none';
    if (this.selectedCodeItem == '1' || this.selectedCodeItem == '2') {
      document.getElementById('item3').style.display = 'flex';
      document.getElementById('item4').style.display = 'flex';
      document.getElementById('item5').style.display = 'flex';
      document.getElementById('item7').style.display = 'flex';
      document.getElementById('item8').style.display = 'flex';
      document.getElementById('item9').style.display = 'flex';
      document.getElementById('item10').style.display = 'flex';
      document.getElementById('item11').style.display = 'flex';
    } else if (this.selectedCodeItem == '3') {
      document.getElementById('item3').style.display = 'flex';
      document.getElementById('item4').style.display = 'flex';
    }
  }
}
