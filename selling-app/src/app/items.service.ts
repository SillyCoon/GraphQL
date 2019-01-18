import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

  getCurrency() {
    return this.http.get(this.baseUrl);
  }

  constructor(private http: HttpClient) { }
}
