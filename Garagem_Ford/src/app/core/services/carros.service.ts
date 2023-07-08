import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private Url = 'http://localhost:3000/carros'

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Card[]> {
    return this.http.get<Card[]>(this.Url);
  }

  public add(request: Card): Observable<Card>{
    return this.http.post<Card>(this.Url, request);
  }

  public update(request: Card, id: number): Observable<Card>{
    return this.http.put<Card>(`${this.Url}/${id}`, request);
  }

  public delete(id:number): Observable<void>{
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  public getById(id: number): Observable<Card>{
    return this.http.get<Card>(`${this.Url}/${id}`);
 }
}
