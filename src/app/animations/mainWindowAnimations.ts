import {
  animation, trigger, animateChild, group,
  transition, animate, style, keyframes, query
} from '@angular/animations';

export const sideBarAnimation = animation([
  style({
    left: ' {{ postion }} ',
  }),
]);
