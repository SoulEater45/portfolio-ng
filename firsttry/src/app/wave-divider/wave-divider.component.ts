// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-divider',
  templateUrl: './wave-divider.component.html',
  styleUrls: ['./wave-divider.component.scss']
})
export class WaveDividerComponent implements OnInit {
  viewboxWidth: number;
  viewboxHeight: number;
  viewbox: string;
  bezierPath: string[];
  vN: number;
  flip: string;

  @Input() f: boolean = false;
  @Input() bgColor1: string = "var(--bg-color-1)";
  @Input() bgColor2: string = "var(--bg-color-2)";

  constructor() {
    this.flip = this.f ? "flip" : "";
    this.viewboxWidth = 160;
    this.viewboxHeight = 120;
    this.viewbox = `0 0 ${this.viewboxWidth} ${this.viewboxHeight}`;
    this.vN = 4;
    let hN = 8;

    let offset = 4;
    // let tdh = 1 / 8;
    // let qdh = 1 / 16;
    let tdh = 1 / 16;
    let qdh = tdh;
    this.bezierPath = [];
    for (let j = 0; j < this.vN; j++) {
      let dh = (this.vN - j) / (this.vN + 1);
      this.bezierPath[j] = `M${-offset},${-offset}`;
      this.bezierPath[j] += ` L0,${Math.round(this.viewboxHeight * dh)}`;
      for (let i = 1; i < hN; i++) {
        if (i == 1) {
          this.bezierPath[j] += ` Q${this.viewboxWidth * 0.5 * i / hN},${Math.round(this.viewboxHeight * (dh + Math.random() * qdh))}`;
          this.bezierPath[j] += ` ${this.viewboxWidth * i / hN},${Math.round(this.viewboxHeight * (dh + Math.random() * tdh))}`;
        } else {
          this.bezierPath[j] += ` T${this.viewboxWidth * i / hN},${Math.round(this.viewboxHeight * (dh + Math.random() * tdh))}`;
        }
      }
      this.bezierPath[j] += ` T${this.viewboxWidth},${Math.round(this.viewboxHeight * dh)}`;
      this.bezierPath[j] += ` L${this.viewboxWidth + offset},${-offset} L${-offset},${-offset} Z`;
    }
    console.log(this.bezierPath);
  }

  ngOnInit(): void {
    this.flip = this.f ? "flip" : "";
  }

}
