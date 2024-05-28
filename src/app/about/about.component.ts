import { Component } from '@angular/core';
import { TitleCardComponent } from "../common/components/title-card/title-card.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [TitleCardComponent]
})
export class AboutComponent {

  pageTitle="About"

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
