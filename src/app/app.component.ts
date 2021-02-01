import { Component } from '@angular/core';
import { NewServiceService } from "./new-service.service";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http';

  response: any;
  id: number;

    constructor(private service: NewServiceService,
                private http: HttpClient) {}

    search() {
      this.http.get('https://jsonplaceholder.typicode.com/users/' + this.id)
          .subscribe((response) => {
            this.response = response;
            console.log('this.response', this.response);
          })
    }

}
