import { Component } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { SvgService } from '../../services/svg-service/svg.service';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SVGComponent {

  height: number = 0;

  width: number = 0;

  constructor(private svgService: SvgService) {
    this.getSVG();
  }

  getSVG(): void {
    this.svgService.getSVG().subscribe(svg => {
      this.height = svg.height;
      this.width = svg.width;
    })
  }

  updateSVG(): void {
    this.svgService.updateSVG(this.width, this.height).subscribe(_svg => {
      
    })
  }

  onResize(event: ResizedEvent): void {
    this.width = Math.round(event.newRect.width);
    this.height = Math.round(event.newRect.height);

    this.updateSVG();
  }

}
