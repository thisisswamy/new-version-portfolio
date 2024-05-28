import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent,
        children:[
            {
                path:'',
                redirectTo:'/about',
                pathMatch:'full'
            },
            {
                path:'about',
                component:AboutComponent
            },
            {
                path:'workExperience',
                component:WorkComponent
            },
            {
                path:'projects',
                component:ProjectsComponent
            },
            {
                path:'education-skills',
                component:EducationComponent
            }
        ]
    }
];
