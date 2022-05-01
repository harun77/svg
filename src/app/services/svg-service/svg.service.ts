import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  baseURL = 'https://localhost:3000';

  constructor(private http: HttpClient) { }

  getSVG(): Observable<any> {
    const url = `${this.baseURL}/api/svg`;
    return this.http.get(url);
  }

  updateSVG(width: number, height: number): Observable<any> {
    const url = `${this.baseURL}/api/svg`;
    const data = { width, height };
    return this.http.post(url, data);
  }
}
