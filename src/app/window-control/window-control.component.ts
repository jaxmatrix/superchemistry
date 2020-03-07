import { Component, OnInit } from '@angular/core';
import { IpcRenderer } from 'electron';

@Component({
  selector: 'app-window-control',
  templateUrl: './window-control.component.html',
  styleUrls: ['./window-control.component.scss']
})

export class WindowControlComponent implements OnInit {

  title = 'Project Name : Part that we are analysing';

  private ipc: IpcRenderer;

  constructor() {
    if ( ( window as any ).require) {
      try {
        this.ipc = ( window as any ).require('electron').ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
      console.warn('Could not load electron ipc');
    }
  }


  ngOnInit() {
  }

  closeWindow() {
    this.ipc.send('close');
  }

  minimixeWindow() {
    this.ipc.send('minimize');
  }

  maximizeWindow() {
    this.ipc.send('maximize');
  }
}
