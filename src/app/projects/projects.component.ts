import { Component } from '@angular/core';
import { TitleCardComponent } from "../common/components/title-card/title-card.component";
import { InfoPopupComponent } from "../common/components/info-popup/info-popup.component";
import { NgClass } from '@angular/common';
import { DataConstants } from '../common/constansts/DataConstants';
import { DataService } from '../common/services/DataService';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    providers:[DataService],
    imports: [TitleCardComponent, InfoPopupComponent, NgClass]
})
export class ProjectsComponent {
    pageTitle ='Projects'
    isProjectClicked!:boolean;
    selectedProject:any;

    listOfProjects = DataConstants.personalProjects;
    constructor(private dataService:DataService){}

    openProject(project:any){
        this.dataService.selectedProject.next(project)
        console.log(project)
        this.isProjectClicked=true;
    }
    closePopupListner(){
        this.isProjectClicked =false;
    }
}
