import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {

  downloadResume(){
    window.open("https://drive.google.com/file/d/135mzX4Ge3IEY3Ek8JVFTNgG3wp8JosOP/view?usp=sharing","_blank")
  }
  toGitHub(){
    window.open("https://github.com/thisisswamy","_blank")

  }
  toLinkedin(){
    window.open("https://www.linkedin.com/in/swamy-t/","_blank")
  }
  toGmail(){
    window.open("mailto:thudumswamy786@gmail.com")
  }

}
