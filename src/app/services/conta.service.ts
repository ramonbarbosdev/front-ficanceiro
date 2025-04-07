import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  http = inject(HttpClient);

  API = 'http://localhost:8080/controlefinanceiro/conta';

  findAll(): Observable<any[]>  
  {
    const url = `${this.API}/`;
    return this.http.get<any[]>(url).pipe(
      catchError(error => throwError(() => error))
    ); 
              
  }

  findById(id: number): Observable<any>
  {
   
    const url = `${this.API}/${id}`;

    return this.http.get<any>(url,).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    ); 
  }
  deletar(id: number): Observable<any>  
  {

    const url = `${this.API}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );    
  }

  save(object: any): Observable<any>
  {
    const url = `${this.API}/`;
    return this.http.post<any>(url, object).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  update(object: any): Observable<any>
  {
    const url = `${this.API}/`;
    return this.http.put<any>(url, object).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

}
