import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  url = environment.apiUrl;

  constructor( private http: Http ) { }

  getHistory() {
    return this.http.get(this.url+'/history');
  }

  addHistory(raw) {
    let headers = new Headers(),
        options = new RequestOptions({ headers: headers });
    
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url+'/history', raw, options);
  }

  deleteHistory(id) {
    return this.http.delete(this.url+`/history/${id}`);
  }
}
