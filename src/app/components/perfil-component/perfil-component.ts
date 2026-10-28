import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  public autorized:boolean
  public user!:Empleado

  constructor(
    private _router:Router,
    private _service:ServiceEmpleados
  ){
    this.autorized=false
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('token')){
      this.autorized=true
      this._service.getPerfil().subscribe(response=>{
        this.user=response
      })
    }else{
      this._router.navigate(['/login'])
    }
  }

}
