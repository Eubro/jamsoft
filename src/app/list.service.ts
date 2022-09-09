import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Empresa } from './models/empresa';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const url = 'http://localhost:8080/api/empresas';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(url)

  };

  create(data: { nome: string; }): Observable<Empresa[]>{
    return this.http.post<Empresa[]>(url,data);
  }
  findByEmpresa(nome:any): Observable<Empresa[]>{
    return this.http.get<Empresa[]>('${url}?nome=${nome}');
  }



}
