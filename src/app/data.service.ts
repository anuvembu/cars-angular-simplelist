import { Injectable } from '@angular/core';
import { retry, catchError,map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ROOT_URL = 'http://eacodingtest.digital.energyaustralia.com.au';

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get<Car[]>(this.ROOT_URL+'/api/v1/cars');
  }

  public getAllItems(): Observable<Car[]> {
    return this.http.get(this.ROOT_URL+'/api/v1/cars').pipe(map(res => { 
      var ret = <Car[]>res;
      ret.sort((a,b) => a.cars.make < b.cars.make ? -1 : 1);
      return ret }));
      //return res.json() });
    
      /*return this.http.get<Car[]>(this.ROOT_URL+'/api/v1/cars').pipe(retry(1),       
      catchError(this.handleError))*/
  }
    /*handleError(error) {
      let errorMessage='';
      if(error.error instanceof ErrorEvent){
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }*/
    
  
}
