import { trigger, style, animate, transition } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
     style({ transform: 'translateX(100%)', opacity: 0 , background: 'red'}),
    animate('400ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('400ms ease-in-out', style({ transform: 'translateX(-200%)', opacity: 0,background: 'red' }))
  ])
]);
