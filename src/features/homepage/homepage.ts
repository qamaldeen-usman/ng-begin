import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import Typed from 'typed.js';
import { jarallax } from 'jarallax';


@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePage implements AfterViewInit {


  async ngAfterViewInit() {

    const { jarallax } = await import('jarallax');

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.4
    });

  }

  // ngAfterViewInit(): void {
  //   jarallax(document.querySelectorAll('.jarallax'), {
  //     speed: 0.4
  //   });
  // }
}
