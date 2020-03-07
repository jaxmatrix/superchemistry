import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-control',
  templateUrl: './window-control.component.html',
  styleUrls: ['./window-control.component.scss']
})
export class WindowControlComponent implements OnInit {

  title = 'Project Name : Part that we are analysing';

  constructor() { }

  ngOnInit() {
  }

}
