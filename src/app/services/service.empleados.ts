import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Empleado } from '../models/empleado';

@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient) {}

  url = environment.urlEmpleados;

  authUser(user: User): Observable<any> {
    let request = 'auth/login';
    let json = JSON.stringify(user);
    let header = new HttpHeaders();
    header = header.set(
      'authentication',
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyRGF0YSI6IntcIklkRW1wbGVhZG9cIjo3ODM5LFwiQXBlbGxpZG9cIjpcIlJFWVwiLFwiT2ZpY2lvXCI6XCJQUkVTSURFTlRFXCIsXCJTYWxhcmlvXCI6NjUwMDAwLFwiRGlyZWN0b3JcIjowfSIsIm5iZiI6MTc5MzE4NzY2OSwiZXhwIjoxNzkzMTg4MjY5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM3NS8iLCJhdWQiOiJBcGlFbXBsZWFkb3NDb3JlT0F1dGgifQ.sV4VeomV2DRaxLE9w2wTTo6UP4Nxh-WjRiz6Z39RsKk',
    );
    header=header.set('content-type','application/json')
    return this._http.post(this.url + request, json, { headers: header });
  }

  getPerfil(): Observable<Empleado> {
    let request = 'api/empleados/perfilempleado';
    let header = new HttpHeaders();
    header = header.set(
      'authentication',
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyRGF0YSI6IntcIklkRW1wbGVhZG9cIjo3ODM5LFwiQXBlbGxpZG9cIjpcIlJFWVwiLFwiT2ZpY2lvXCI6XCJQUkVTSURFTlRFXCIsXCJTYWxhcmlvXCI6NjUwMDAwLFwiRGlyZWN0b3JcIjowfSIsIm5iZiI6MTc5MzE4NzY2OSwiZXhwIjoxNzkzMTg4MjY5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM3NS8iLCJhdWQiOiJBcGlFbXBsZWFkb3NDb3JlT0F1dGgifQ.sV4VeomV2DRaxLE9w2wTTo6UP4Nxh-WjRiz6Z39RsKk',
    );
    return this._http.get<Empleado>(this.url+request,{headers:header})
  }
}
