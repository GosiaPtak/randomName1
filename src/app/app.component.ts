import { Component, OnInit } from '@angular/core';

import randomNames from '../assets/randomNames.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Losowe Imie';
  public randomName: string;
  constructor() {}

  ngOnInit() {
    this.randomName =
      randomNames[Math.floor(Math.random() * randomNames.length)];
  }
}
