import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {

  constructor(private _router:Router){}
  logOutEmpleado():void{
    sessionStorage.removeItem('token')
    sessionStorage.clear()
    this._router.navigate(['/login'])
  }
}
