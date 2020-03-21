import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-load-more-content';

  datas = [{id: 1, content: "1"}, {id: 2, content: "2"}, {id: 3, content: "3"}, {id: 4, content: "4"}, {id: 5, content: "5"}];
}
