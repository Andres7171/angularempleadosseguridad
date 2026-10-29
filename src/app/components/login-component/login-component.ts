import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {

  public usuario!:User
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;

  constructor(
    private _cdr:ChangeDetectorRef,
    private _router:Router,
    private _service:ServiceEmpleados 
  ){}

  checkLogin():void{
    let usuario=new User(this.cajaNombre.nativeElement.value,this.cajaPassword.nativeElement.value)

    this._service.authUser(usuario).subscribe(response=>{
      sessionStorage.setItem('token',response.response)
      sessionStorage.setItem('user',this.cajaNombre.nativeElement.value)
      sessionStorage.setItem('password',this.cajaPassword.nativeElement.value)
      this._router.navigate(['/perfil'])
    })
  }

}
