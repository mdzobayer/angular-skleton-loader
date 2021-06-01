import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skleton-loader',
  templateUrl: './skleton-loader.component.html',
  styleUrls: ['./skleton-loader.component.scss']
})
export class SkletonLoaderComponent implements OnInit {


  @Input() width: number;
  @Input() height: number;
  @Input() borderRadius: number;

  constructor() { }

  ngOnInit(): void {
  }

  getMyStyle() {
    const myStyles = {
      'width.px': this.width ? this.width : '',
      'height.px': this.height ? this.height : '',
      'border-radius.px': this.borderRadius ? this.borderRadius : ''
    };

    return myStyles;
  }

}
