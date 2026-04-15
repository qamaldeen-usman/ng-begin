import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements AfterViewInit {

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngAfterViewInit() {
    new Typed(this.typedElement.nativeElement, {
      strings: ['remake.', 'revamp.', 'beautify.'],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  }
}
