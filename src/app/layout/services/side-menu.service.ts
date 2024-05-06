import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  private sideMenuState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  setOpen(){
    this.sideMenuState.next(true)
  }
  setClose(){
    this.sideMenuState.next(false)
  }
  get State(){
    return this.sideMenuState
  }

}
