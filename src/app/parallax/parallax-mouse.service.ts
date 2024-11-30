import { HostListener, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ParallaxMouseService {
  mousePosSubject = signal({ x: 0, y: 0 });

  isStarted = false;

  moveMoveListenerBound = this.moveMoveListener.bind(this);

  start(): void {
    if (!this.isStarted) {
      document.addEventListener('mousemove', this.moveMoveListenerBound);
      this.isStarted = true;
    }
  }

  stop(): void {
    document.removeEventListener('mousemove', this.moveMoveListenerBound);
    this.isStarted = false;
  }

  moveMoveListener(e: MouseEvent): void {
    if (e.clientX === document.documentElement.clientWidth / 2 && e.clientY === document.documentElement.clientHeight / 2) {
      console.log('CENTER')
    }
    this.mousePosSubject.set({ x: e.clientX, y: e.clientY });
  }
}
