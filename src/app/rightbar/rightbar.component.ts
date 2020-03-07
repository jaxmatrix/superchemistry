import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit {

  @Output() openBarRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openBar() {
    this.openBarRequest.emit();
  }


}
