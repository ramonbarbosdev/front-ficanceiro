import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/controlefinanceiro/lancamento';

  constructor() { }

  findAll(): Observable<any[]>  
  {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NDAzMDI1N30.oSMB2Rf3WydWrfrtRwtwwcWOsEKtVHnARE9gHzUTD_iWeXKOjJpEuyroH4_vtsB23CEg4WRsu4Me7w3ZZYmOSA" // ou onde você estiver guardando
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    const url = `${this.API}/`;

    return this.http.get<any[]>(url, { headers }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    ); 
              
  }

  findById(id: number): Observable<any>
  {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NDAzMDI1N30.oSMB2Rf3WydWrfrtRwtwwcWOsEKtVHnARE9gHzUTD_iWeXKOjJpEuyroH4_vtsB23CEg4WRsu4Me7w3ZZYmOSA" // ou onde você estiver guardando
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    const url = `${this.API}/${id}`;

    return this.http.get<any>(url, { headers }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    ); 
  }
  deletar(id: number): Observable<any>  
  {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NDAzMDI1N30.oSMB2Rf3WydWrfrtRwtwwcWOsEKtVHnARE9gHzUTD_iWeXKOjJpEuyroH4_vtsB23CEg4WRsu4Me7w3ZZYmOSA" // ou onde você estiver guardando
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
   
    const url = `${this.API}/${id}`;

    return this.http.delete<any>(url, { headers  }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );    
  }

  save(object: any): Observable<any>
  {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NDAzMDI1N30.oSMB2Rf3WydWrfrtRwtwwcWOsEKtVHnARE9gHzUTD_iWeXKOjJpEuyroH4_vtsB23CEg4WRsu4Me7w3ZZYmOSA" // ou onde você estiver guardando
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const url = `${this.API}/`;

    return this.http.post<any>(url, object, { headers }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  update(object: any): Observable<any>
  {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NDAzMDI1N30.oSMB2Rf3WydWrfrtRwtwwcWOsEKtVHnARE9gHzUTD_iWeXKOjJpEuyroH4_vtsB23CEg4WRsu4Me7w3ZZYmOSA" // ou onde você estiver guardando
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const url = `${this.API}/`;

    return this.http.put<any>(url, object, { headers }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }

  findStatus(): Observable<any>
  {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NDAzMDI1N30.oSMB2Rf3WydWrfrtRwtwwcWOsEKtVHnARE9gHzUTD_iWeXKOjJpEuyroH4_vtsB23CEg4WRsu4Me7w3ZZYmOSA" // ou onde você estiver guardando
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    const url = `http://localhost:8080/controlefinanceiro/statuslancamento/`;

    return this.http.get<any>(url, { headers }).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    ); 
  }

}
