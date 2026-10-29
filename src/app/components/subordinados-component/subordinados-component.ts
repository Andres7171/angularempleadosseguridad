import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit{

 public subordinados!:Empleado[]
  constructor(
    private _cdr:ChangeDetectorRef,
    private _service:ServiceEmpleados,
    private _router:Router
  ){}


  ngOnInit(): void {
    if(sessionStorage.getItem('token')==null){
      this._router.navigate(['/login'])
    }else{
      this._service.getSubordinados().subscribe(response=>{
      this.subordinados=response
      this._cdr.detectChanges()
    })
    }
    
  }
}
