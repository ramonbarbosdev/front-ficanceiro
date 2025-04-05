import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tipoconta } from '../models/tipoconta';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipocontaService {

  http = inject(HttpClient);

  API = 'http://localhost:8080/controlefinanceiro/tipoconta';



  constructor() { }

  findAll(): Observable<Tipoconta[]>  
  {

    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NDAzMDI1N30.oSMB2Rf3WydWrfrtRwtwwcWOsEKtVHnARE9gHzUTD_iWeXKOjJpEuyroH4_vtsB23CEg4WRsu4Me7w3ZZYmOSA" // ou onde você estiver guardando

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
 
  
    return this
            .http
            .get<Tipoconta[]>(this.API + "/", { headers }) 
            .pipe( catchError(error =>
            {
                  return throwError(() => error);
            }));
              
  }
}
