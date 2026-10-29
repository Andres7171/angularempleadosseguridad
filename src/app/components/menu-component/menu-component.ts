import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {

  private _serviceSignal:ServiceSignal=inject(ServiceSignal)
  private _serviceAuth:ServiceAuthEmpleados=inject(ServiceAuthEmpleados)

  public contador=this._serviceSignal.contador
  public usuario=this._serviceAuth.user

  constructor(private _router:Router){}
  logOutEmpleado():void{
    sessionStorage.removeItem('token')
    sessionStorage.clear()
    this._router.navigate(['/login'])
  }
}
