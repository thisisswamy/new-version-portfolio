import { Component } from '@angular/core';
import { TitleCardComponent } from "../common/components/title-card/title-card.component";

@Component({
    selector: 'app-education',
    standalone: true,
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss',
    imports: [TitleCardComponent]
})
export class EducationComponent {
    pageTitle ='Education & Skills';

    pSkills =[
        'HTML', 'CSS', "Java Script",'Type Script','Java'
    ]
    frameworks =['React','Angular','Spring framework(Boot)']
    tools =[
        'Git','Bit Bucket','Jenkins'
    ]
    dataBases =['Mongo DB', 'MySQL', 'SQL']
}
