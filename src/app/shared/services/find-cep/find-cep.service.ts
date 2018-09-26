import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindCepService {
  url = environment.apicep;

  constructor( private http: Http ) { }

  findCep(cep) {
    return this.http.get(this.url+`${cep}/json`);
  }
}