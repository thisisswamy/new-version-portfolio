import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/DataService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-popup',
  standalone: true,
  // providers:[DataService],
  imports: [],
  templateUrl: './info-popup.component.html',
  styleUrl: './info-popup.component.scss'
})
export class InfoPopupComponent implements OnInit,OnDestroy {

  @Output()
  closePopupEvent= new EventEmitter()

  project:any
  subscription!:Subscription;
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.subscription = this.dataService.selectedProject.subscribe((res:any)=>{
      this.project=res;
      console.log(res)
    })
  }
  
  
  close(){
    console.log("closed..")
    this.closePopupEvent.emit(true)
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
