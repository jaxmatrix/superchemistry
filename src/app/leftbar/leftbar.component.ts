import { Component, OnInit } from '@angular/core';
import {
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {

  @Output() openBarRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openBar() {
    this.openBarRequest.emit();
  }


}
