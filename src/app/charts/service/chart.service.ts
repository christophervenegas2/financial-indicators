import { Injectable } from '@angular/core';
import {catchError, retry} from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {NGXLogger} from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { Constants } from '../chart.constant';
import { ProgressChartData } from '../models/chart.model';
import { ValueChartData } from '../models/chart-value.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor( private http: HttpClient, private logger: NGXLogger ) { }

  getProgressChartData(): Observable<ProgressChartData> {
    return this.http.get<ProgressChartData>(Constants.API_URL).pipe(
      retry(3),
      catchError(this.handleError<ProgressChartData>('getProgressChartData', undefined)));
  }

  getChartValue(apiRoute: string): Observable<ValueChartData> {
    return this.http.get<ValueChartData>(Constants.API_URL + "/" + apiRoute).pipe(
      retry(3),
      catchError(this.handleError<ValueChartData>('getProgressChartData', undefined)));
  }

  getChartValuePastMonth(apiRoute: string, month: string): Observable<ValueChartData> {
    return this.http.get<ValueChartData>(Constants.API_URL + "/" + apiRoute + "/" + month).pipe(
      retry(3),
      catchError(this.handleError<ValueChartData>('getProgressChartData', undefined)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.logger.debug(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
