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

  findAll(): Observable<any[]>  
  {
    const url = `${this.API}/`;
    return this.http.get<any[]>(url).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    ); 
              
  }

  findById(id: number): Observable<Tipoconta>
  {
    const url = `${this.API}/${id}`;
    return this.http.get<Tipoconta>(url).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    ); 
  }
  deletar(id: number): Observable<any>  
  {
    const url = `${this.API}/${id}`;
    return this.http.delete<Tipoconta>(url).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );    
  }

  save(object: Tipoconta): Observable<Tipoconta>
  {
    const url = `${this.API}/`;
    return this.http.post<Tipoconta>(url, object).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  update(object: Tipoconta): Observable<Tipoconta>
  {
    const url = `${this.API}/`;
    return this.http.put<Tipoconta>(url, object).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }


}
