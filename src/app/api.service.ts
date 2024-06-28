import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, timeout } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'https://api.nbp.pl/api/';

  constructor(private http: HttpClient) { }


  private get(endpoint: string): Observable<any> {
    return this.http.get<any>(this.apiURL + endpoint).pipe(
      timeout(5000),
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('Error: ', error);
    return throwError(() => error);
  }

  getExchangeRates(table: string, date = ""): Observable<any> {
    return this.get(`exchangerates/tables/${table}/${date}`);
  }
}

