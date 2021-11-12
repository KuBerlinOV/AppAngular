import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onNavBtnClick = new EventEmitter<string>()
  constructor() { }
  onSelect(page: string) {
    this.onNavBtnClick.emit(page)
  }
  ngOnInit(): void {
  }

}
