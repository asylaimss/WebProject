import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataLenta } from './data-lenta';
import { Data1 } from './data1';

@Injectable({
  providedIn: 'root'
})
export class ServiceLentaService {
  BASE_URL: string;
  constructor(private client: HttpClient) {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com';
  }
  getAlbums(): Observable<DataLenta[]>{
    return this.client.get<DataLenta[]>(`${this.BASE_URL}/albums`)
  }
  getAlbum(id: number): Observable<DataLenta>{
    return this.client.get<DataLenta>(`${this.BASE_URL}/albums/${id}`);
  }
  // editAlbum(album: Album): Observable<Album>{
  //   return this.client.<Album>(`${this.BASE_URL}/albums`, album);
  // }
  deleteAlbum(id: number): Observable<DataLenta>{
    this.client.delete(`${this.BASE_URL}/albums/${id}`);
    return this.client.get<DataLenta>(`${this.BASE_URL}/albums/${id}`);
    // this.client.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  addAlbum(album: DataLenta): Observable<DataLenta>{
    return this.client.post<DataLenta>(`${this.BASE_URL}/albums`, album);
  }
  changeAlbum(id: number, body: DataLenta): Observable<DataLenta>{
    return this.client.put<DataLenta>(`${this.BASE_URL}/albums/${id}`, body);
    // return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }
  /////
  /////
  /////
  /////
  /////
  // getData1s(): Observable<DataLenta[]>{
  //   return this.client.get<DataLenta[]>(``)
  // }
  // getData1(id: number): Observable<DataLenta>{
  //   return this.client.get<DataLenta>(`${this.BASE_URL}/albums/${id}`);
  // }
  // deleteData(id: number): Observable<Data1>{
  //   this.client.delete(`${this.BASE_URL}/albums/${id}`);
  //   return this.client.get<Data1>(`${this.BASE_URL}/albums/${id}`);
  // }
  // addData(album: Data1): Observable<Data1>{
  //   return this.client.post<Data1>(`${this.BASE_URL}/albums`, album);
  // }
  // changeData(id: number, body: Data1): Observable<Data1>{
  //   return this.client.put<Data1>(`${this.BASE_URL}/albums/${id}`, body);
  // }
  

}
