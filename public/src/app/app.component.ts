import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'public';
  items : any;
  _id : '';
  // list_all_items: { name: string; description: string; };

  constructor(private _httpService: HttpService){}


  ngOnInit() {
    // this.list_all_items = { name: "", description: "" }
  }

  get_all() {
    let observable = this._httpService.get_all();
    observable.subscribe(data => {
      console.log("successful route", data);
      // this.items.push(data)
      this.items = data;
    })
  }


}
