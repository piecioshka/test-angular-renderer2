import { Component, Renderer2, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('item') markElement = null;
  @ViewChild('item2') markElement2 = null;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.handle(this.markElement.nativeElement);
    this.handle(this.markElement2.nativeElement);
  }

  handle(domElement) {
    this.renderer.addClass(domElement, 'mark');
    this.renderer.listen(domElement, 'click', (evt) => {
      console.log(evt.target);
    });
  }

}
