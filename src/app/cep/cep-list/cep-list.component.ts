import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HistoryService } from '../../shared';

@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.scss']
})
export class CepListComponent implements OnInit {
  @Output() loaderOut = new EventEmitter();

  @Input() history = [];

  displayedColumns = ['id', 'cep', 'address', 'date', 'action'];

  constructor( private historyService: HistoryService ) { }

  ngOnInit() {
  }

  deleteHistory(id) {
    this.loaderOut.emit(true);

    this.historyService.deleteHistory(id).subscribe(() => {
      this.historyService.getHistory().subscribe((data) => {
        let response = data.json();

        this.history = response;

        this.loaderOut.emit(false);
      });
    });
  }
}