import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TechDataService {
  constructor(private http: HttpClient) {}

  // API Call
  getResponse() {
    return this.http.get(
      'https://tech-dashboard-nest-api.herokuapp.com/dashboard/list'
    );
  }
}
