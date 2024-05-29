import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen!:boolean;
  isDarkTheme!:boolean;



  themeTogggler(){
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark');
  }
  openMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
