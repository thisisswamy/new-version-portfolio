import { Component } from '@angular/core';
import { TitleCardComponent } from "../common/components/title-card/title-card.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [TitleCardComponent]
})
export class ProjectsComponent {
    pageTitle ='Projects'
}
