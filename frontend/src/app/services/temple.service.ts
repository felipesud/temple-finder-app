import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temple } from '../models/temple.model';

@Injectable({
  providedIn: 'root'
})
export class TempleService {

  constructor(private http: HttpClient) { }

  getTemples(): Observable<Temple[]> {
    return this.http.get<Temple[]>('');
  }

  createTemple(temple: Temple): Observable<Temple> {
    return this.http.post<Temple>('http://localhost:3000/api/temples', temple);
  }

  getTemple(id: string): Observable<Temple> {
    return this.http.get<Temple>(`http://localhost:3000/api/temples/${id}`);
  }

  updateTemple(id: string, temple: Temple): Observable<Temple> {
    return this.http.put<Temple>(`http://localhost:3000/api/temples/${id}`, temple);
  }

  deleteTemple(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/temples/${id}`);
  }
}
