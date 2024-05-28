import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:"full"

    },
    {
        path:"home",
        component:HomeComponent,
        children:[
            {
                path:'',
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
                path:'contact',
                component:ContactComponent
            }
        ]
    }
];
