import { Component } from '@angular/core';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProfileCardComponent,RouterOutlet]
})
export class HomeComponent {

}
