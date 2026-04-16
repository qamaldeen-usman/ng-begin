import { Component, AfterViewInit, ElementRef, ViewChild, OnInit,ChangeDetectorRef } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
// export class Homepage implements AfterViewInit {
//
//   @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
//
//   ngAfterViewInit() {
//     new Typed(this.typedElement.nativeElement, {
//       strings: ['remake.', 'revamp.', 'beautify.'],
//       typeSpeed: 60,
//       backSpeed: 30,
//       backDelay: 2000,
//       loop: true
//     });
//   }
// }

export class Homepage implements OnInit {
  days = 21;
  hours = 24;
  minutes = 60;
  seconds = 60;

  targetDate = new Date('2026-04-16T08:15:05');

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      if (distance < 0) return;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      this.minutes = Math.floor((distance / (1000 * 60)) % 60);
      this.seconds = Math.floor((distance / 1000) % 60);

      console.log(this.seconds); // debug

    }, 1000);
  }

  // startCountdown() {
  //   setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = this.targetDate.getTime() - now;
  //
  //     if (distance < 0) return;
  //
  //     this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  //     this.minutes = Math.floor((distance / (1000 * 60)) % 60);
  //     this.seconds = Math.floor((distance / 1000) % 60);
  //
  //     this.cd.detectChanges(); // 🔥 force update
  //
  //   }, 1000);

}
