import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){
    console.log("Entered http service ts file");
    // this.getItems();
  }


  get_all() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/items');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our items!", data));
    return this._http.get('/items');

 }
}