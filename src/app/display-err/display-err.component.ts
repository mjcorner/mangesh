import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-err',
  templateUrl: './display-err.component.html',
  styleUrls: ['./display-err.component.css']
})
export class DisplayErrComponent implements OnInit {
  disperr = '404: Page Not Found'
  constructor() { }

  ngOnInit() {
  }

}
