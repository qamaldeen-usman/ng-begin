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

  ngAfterViewInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.4
    });
  }
}
