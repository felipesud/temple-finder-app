import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
    return this.http.post<any>(`${this.apiUrl}`, adaptedTemple).pipe(
      map((response: any) => this.templeAdapter.adapt(response))
    );
  }

  getTemple(id: string): Observable<Temple> {
    return this.http.get<any>(`${this.apiUrl}${id}`).pipe(
      map((response: any) => this.templeAdapter.adapt(response))
    );
  }

  updateTemple(id: string, temple: Temple): Observable<Temple> {
    const adaptedTemple = this.templeAdapter.adapt(temple);
    return this.http.put<any>(`${this.apiUrl}${id}`, adaptedTemple).pipe(
      map((response: any) => this.templeAdapter.adapt(response))
    );
  }

  deleteTemple(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}${id}`).pipe(
      map(() => true),
      catchError((error) => {
        console.log("Error deleting temple:", error);
        return of(false);
      })
    );
  }

}
