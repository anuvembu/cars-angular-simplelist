import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Car } from './car';

import { Observable } from 'rxjs';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  /*readonly ROOT_URL = 'http://eacodingtest.digital.energyaustralia.com.au';
  
  data: Observable<Car[]>;

  constructor(private http: HttpClient) {}

  getData() {
    
    this.data = this.http.get<Car[]>(this.ROOT_URL + '/api/v1/cars');
    
  }*/

  data$: any;
  descending: boolean = false;
order: number;
column: string = 'cars.make';
  
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData().subscribe(data => this.data$ = data); 
    //this.data.getAllItems().subscribe(data => this.data$ = data); 
    /*this.data.getData().subscribe(data => {
      let show = data[0]["cars"];
      let  = show["make"];
      this.data = 
    });*/
  }

  sort(){
    this.descending = !this.descending;
  this.order = this.descending ? 1 : -1;
  }
}
