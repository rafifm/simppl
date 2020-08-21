import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const urlGuru = 'http://localhost:4000/api/guru';

@Injectable({
  providedIn: 'root'
})
export class DataguruService {

  constructor(private http: HttpClient, private router: Router) { }

  ambilSemua(params): Observable<any> {
    return this.http.get(urlGuru, { params }); 
  }

  ambil(id): Observable<any> {
    return this.http.get(`${urlGuru}/${id}`);
  }

  buat(data): Observable<any> {
    return this.http.post(`${urlGuru}/buat`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${urlGuru}/${id}`, data);
  }

  hapus(id): Observable<any> {
    return this.http.delete(`${urlGuru}/${id}`);
  }

  hapusSemua(): Observable<any> {
    return this.http.delete(urlGuru);
  }

}
