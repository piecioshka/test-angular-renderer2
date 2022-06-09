import {
  Component,
  Renderer2,
  OnInit,
  ViewChild,
  DebugElement,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("item1") markElement1: DebugElement | null = null;
  @ViewChild("item2") markElement2: DebugElement | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.handle(this.markElement1?.nativeElement);
    this.handle(this.markElement2?.nativeElement);
  }

  private handle(domElement: HTMLElement) {
    this.renderer.addClass(domElement, "mark");
    this.renderer.listen(domElement, "click", (evt: MouseEvent) => {
      console.log(evt.target);
    });
  }
}
