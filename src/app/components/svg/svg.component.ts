import { Component } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SVGComponent {

  height = 500;

  width = 500;

  constructor() { }

  onResize(event: ResizedEvent): void {
    this.width = Math.round(event.newRect.width);
    this.height = Math.round(event.newRect.height);
  }

}
