import { computed, Directive, effect, ElementRef, inject, Injector, Input, OnDestroy, OnInit, Renderer2, Signal } from "@angular/core";
import { ParallaxMouseService } from "./parallax-mouse.service";
import { ParallaxDirectiveError } from "./parallax-errors";

@Directive({
  selector: '[parallax]',
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() parallax!: number;

  private parallaxCachedValue!: number;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLElement>,
    private mouseService: ParallaxMouseService,
    private injector: Injector,
  ) {
    this.mouseService.start();
  }

  ngOnInit(): void {
    if (!this.parallax) {
      throw new ParallaxDirectiveError('ngOnInit', 'parallax input is required');
    }
    this.parallaxCachedValue = this.parallax;

    effect(() => {
      const { x, y } = this.mouseService.mousePosSubject();
      const xCenter = (-x + (document.documentElement.clientWidth / 2)) * this.parallax;
      const yCenter = (-y + (document.documentElement.clientHeight / 2)) * this.parallax;

      const { clientWidth, clientHeight } = this.elementRef.nativeElement;
      this.elementRef.nativeElement.style.transform = `translate(${xCenter}px, ${yCenter}px)`;
    }, { injector: this.injector });
  }

  ngOnDestroy(): void {
    this.mouseService.stop();
  }
}
