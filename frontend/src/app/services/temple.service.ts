import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Temple } from '../models/temple.model';
import { TempleAdapter } from '../adapters/temple.adapter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TempleService {
  private apiUrl: string;

  constructor(private http: HttpClient, private templeAdapter: TempleAdapter) {
    this.apiUrl = environment.apiUrl;
  }

  getTemples(): Observable<Temple[]> {
    return this.http.get<any>(`${this.apiUrl}`).pipe(
      map((response: any[]) => response.map(item => this.templeAdapter.adapt(item)))
    );
  }

  createTemple(temple: Temple): Observable<Temple> {
    const adaptedTemple = this.templeAdapter.adapt(temple);
    return this.http.post<any>(`${this.apiUrl}/api/temples`, adaptedTemple).pipe(
      map((response: any) => this.templeAdapter.adapt(response))
    );
  }

  getTemple(id: string): Observable<Temple> {
    return this.http.get<any>(`${this.apiUrl}/api/temples/${id}`).pipe(
      map((response: any) => this.templeAdapter.adapt(response))
    );
  }

  updateTemple(id: string, temple: Temple): Observable<Temple> {
    const adaptedTemple = this.templeAdapter.adapt(temple);
    return this.http.put<any>(`${this.apiUrl}/api/temples/${id}`, adaptedTemple).pipe(
      map((response: any) => this.templeAdapter.adapt(response))
    );
  }

  deleteTemple(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/temples/${id}`);
  }
}
