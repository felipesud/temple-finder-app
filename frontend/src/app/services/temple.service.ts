import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TempleService {

  constructor(private http: HttpClient) { }

  getTemples(): Observable<any> {
    return this.http.get<any>('');
  }

  createTemple(temple: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/temples', temple);
  }

  getTemple(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/temples/${id}`);
  }

  updateTemple(id: string, temple: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/temples/${id}`, temple);
  }

  deleteTemple(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/temples/${id}`);
  }


}

