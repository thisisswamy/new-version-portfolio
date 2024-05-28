import { Component } from '@angular/core';
import { TitleCardComponent } from "../common/components/title-card/title-card.component";
import { DataConstants } from '../common/constansts/DataConstants';

@Component({
    selector: 'app-work',
    standalone: true,
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss',
    imports: [TitleCardComponent]
})
export class WorkComponent {
    pageTitle = 'Work & Experience'
    workExperience = DataConstants.projectDetails
}
