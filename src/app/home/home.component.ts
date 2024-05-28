import { Component } from '@angular/core';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { Router, RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProfileCardComponent,RouterOutlet,NgClass]
})
export class HomeComponent {

    currrentLink:string=''
    constructor(private router:Router){
        this.currrentLink =router.url.split('/')[1]
        console.log(router.url.split('/'))
    }

    pageNavigate(page:any){
        this.currrentLink=page
        this.router.navigate([page])
    }

}
