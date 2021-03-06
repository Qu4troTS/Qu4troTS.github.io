import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomepageService {

  private baseUrl;

  constructor(
    private http: Http,
  ) {
    this.baseUrl = '/assets/data/homepage/';
  }

  listServices() {
    return this.http.get(this.baseUrl + 'services.json');
  }

  listPortfolio() {
    return this.http.get(this.baseUrl + 'portfolio.json');
  }

  listContactData() {
    return this.http.get(this.baseUrl + 'contact.json');
  }

  listAboutData() {
    return this.http.get(this.baseUrl + 'about.json');
  }

}
