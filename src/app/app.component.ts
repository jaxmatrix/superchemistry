import { Component } from '@angular/core';
import {
  trigger,
  useAnimation,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


// import { sideBarAnimation } from './animations/mainWindowAnimations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('leftBarAnimation', [
      state('visible', style({
        left: '0px',
      })),

      state('hidden', style({
        left: '-360px',
      })),

      transition('visible <=> hidden', [
        animate('100ms')
      ]),
    ]),

    trigger('rightBarAnimation', [
      state('visible', style({
        right: '0px',
      })),

      state('hidden', style({
        right: '-360px',
      })),

      transition('visible <=> hidden', [
        animate('100ms')
      ])
    ]),
  ]
})


export class AppComponent {
  title = 'qmAnalyze';
  isLeftBarOpen = false;
  isRightBarOpen = false;

  toggle(leftOrRight) {

    if (leftOrRight === 1) {
      this.isLeftBarOpen = !this.isLeftBarOpen;
    }

    if ( leftOrRight === 2 ) {
      this.isRightBarOpen = !this.isRightBarOpen;
    }


  }
}
