import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  frontEnd: string[] = [
    "css-3",
    "html",
    "js",
    "typescript",
    "physics",
    "programing"
  ];
  backEnd: string[] = [
    "database-file",
    "java",
    "spring.256x256",
    "api",
    "social"
  ];


}
