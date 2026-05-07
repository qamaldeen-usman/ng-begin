import { Component, ViewEncapsulation, OnInit } from '@angular/core';
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
export class Header implements OnInit{
  ngOnInit(): void {

    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'dark'){

      document.body.classList.add('dark-mode');

      this.isDarkMode = true;

    }

  }

  isDarkMode = false;

  isMenuOpen = false;

  toggleTheme(event: any) {

    this.isDarkMode = event.target.checked;

    if(this.isDarkMode){

      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');

    } else {

      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');

    }

  }
}
