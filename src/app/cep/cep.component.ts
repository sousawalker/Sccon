import { Component, OnInit } from '@angular/core';

import { FindCepService, HistoryService } from '../shared';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {
  loader = false;

  history;

  constructor( private findCepService: FindCepService, private historyService: HistoryService ) { }

  ngOnInit() {
    this.loader = true;

    this.historyService.getHistory().subscribe((data) => {
      let response = data.json();

      this.history = response;

      this.loader = false;
    });
  }

  findCep(cep) {
    if(cep.replace('-', '').length == 8) {
      this.loader = true;

      this.findCepService.findCep(cep).subscribe((data) => {
        let response = data.json();

        if(!response['erro']) {
          let date = new Date(),
              month = this.zeroLeft(date.getMonth()+1),
              day = this.zeroLeft(date.getDate()),
              year = date.getFullYear(),
              hour = this.zeroLeft(date.getHours()),
              minute = this.zeroLeft(date.getMinutes()),
              second = this.zeroLeft(date.getSeconds());

          let raw = {
            "district": response['bairro'],
            "zip_code": response['cep'],
            "complement": response['complemento'],
            "city": response['localidade'],
            "address": response['logradouro'],
            "state": response['uf'],
            "date": `${year}-${month}-${day}T${hour}:${minute}:${second}Z`
          };

          this.historyService.addHistory(raw).subscribe(() => {
            this.historyService.getHistory().subscribe((data) => {
              let response = data.json();

              this.history = response;

              this.loader = false;
            });
          });
        }else{
          this.loader = false;
        }
      });
    }
  }

  toggleLoader(status) {
    this.loader = status;
  }

  zeroLeft(number) {
    return (number < 10) ? "0"+number : number;
  }
}