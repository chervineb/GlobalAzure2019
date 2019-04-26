import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meetupapp';
  helloText: Text;

  constructor(private  http: HttpClient) {
  }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.getHelloMessage().subscribe(
      response => {
        console.log(response);
        this.helloText = response;
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    );
  }

  getHelloMessage(): Observable<any> {
    return this.http.get('http://40.65.184.185:4000/hello', {responseType: 'text'});
  }
}
