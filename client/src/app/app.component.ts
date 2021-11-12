import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page: string = "recipes";
  onNavBtnClicked(page: string) {
    this.page = page
  }
}
