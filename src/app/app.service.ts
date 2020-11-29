import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
    API_ENDPOINT=""
  constructor(
    private http: HttpClient,
  ) {}

  headerData = {
    'userId': '123',
    'Content-Type': 'application/json'
  }
  headerDoc = {
    'userId': '123'
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    let headers = new HttpHeaders(this.headerData);
    return this.http.get(`${this.API_ENDPOINT}${path}`, { headers: headers })     
  }

  put(path: string, body: Object = {}): Observable<any> {
    let headers = new HttpHeaders(this.headerData);
    return this.http.put(
      `${this.API_ENDPOINT}${path}`,
      JSON.stringify(body), { headers: headers }
    )
  }

  post(path: string, body: Object = {}): Observable<any> {
    let headers = new HttpHeaders(this.headerData);
    return this.http.post(
      `${this.API_ENDPOINT}${path}`,
      JSON.stringify(body), { headers: headers }
    )
  }

  delete(path): Observable<any> {
    let headers = new HttpHeaders(this.headerData);
    return this.http.delete(
      `${this.API_ENDPOINT}${path}`, { headers: headers }
    )
  }


}

