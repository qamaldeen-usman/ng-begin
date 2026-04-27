import { Component, ViewEncapsulation } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgbCollapseModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  encapsulation: ViewEncapsulation.None
})
export class Header {
  isMenuOpen = false;
}
