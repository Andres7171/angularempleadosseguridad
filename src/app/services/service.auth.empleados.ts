import { Injectable, signal } from '@angular/core';
import { Empleado } from '../models/empleado';
import { ServiceEmpleados } from './service.empleados';

@Injectable({ providedIn: 'root' })
export class ServiceAuthEmpleados {
  constructor(private _service: ServiceEmpleados) {}

  public user = signal<Empleado | null>(null);

  logInEmpleado(token: string): void {
    sessionStorage.setItem('token', token);
    this._service.getPerfil().subscribe((empleado) => {
      this.user.set(empleado);
    });
  }

  logOutEmpleado(): void {
    sessionStorage.removeItem('token');
    this.user.set(null);
  }
}
