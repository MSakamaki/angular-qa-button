import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

import { Subject } from 'rxjs';

const qaIcon = {
  width: '24px',
  height: '24px',
  'line-height': '24px',
  'text-align': 'center',
  bottom: '10px',
  right: '10px',
  'background-color': 'blue',
  color: 'white',
  'border-radius': '12px',
};

const qaBottom = {
  width: 'calc(100% - 20px)',
  height: '36px',
  'line-height': '36px',
  'text-align': 'center',
  bottom: '10px',
  right: '10px',
  'background-color': 'blue',
  color: 'white',
  'border-radius': '4px',
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
    trigger('isVisibleChanged', [
      state('*' , style(qaIcon)),
      state('true' , style(qaBottom)),
      state('false', style(qaIcon)),
      transition('1 => 0', 
        animate('300ms',
          keyframes([
            style({ color: 'blue' }),
            style(qaIcon)
          ])
        )        
      ),
      transition('0 => 1', 
        animate('300ms', 
          keyframes([
            style({ color: 'blue' }),
            style(qaBottom)
          ])
        )
      )
    ])
  ]
})
export class AppComponent  {

  scrollBottom$ = new Subject<boolean>();

  constructor() {
  }

  @HostListener('window:scroll')
  scrolling() {
    this.scrollBottom$.next((innerHeight + pageYOffset) >= 1000);
  }
}
