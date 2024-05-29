import { BehaviorSubject } from "rxjs";

export class DataService{
    public selectedProject = new BehaviorSubject<any>("");
}