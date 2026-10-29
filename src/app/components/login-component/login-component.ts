import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {

  public usuario!:User
  private _serviceAuth:ServiceAuthEmpleados=inject(ServiceAuthEmpleados)
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;

  constructor(
    private _cdr:ChangeDetectorRef,
    private _router:Router,
    private _service:ServiceEmpleados 
  ){}

  checkLogin(): void {
  let usuario = new User(
    this.cajaNombre.nativeElement.value,
    this.cajaPassword.nativeElement.value
  )
  this._service.authUser(usuario).subscribe(response => {
    this._serviceAuth.logInEmpleado(response.response)
    this._router.navigate(['/perfil'])
  })
}

}

