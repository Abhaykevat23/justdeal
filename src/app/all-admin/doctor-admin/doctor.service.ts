import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/doctor/';
  getdoctor() {
    return this.http.get<doctor[]>(this.baseUrl + 'view.php');
  }
  createdoctor(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updatedoctor(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSingledoctor(id: any) {
    return this.http.get<doctor[]>(this.baseUrl + 'view.php?id=' + id);
  }
  deletedoctor(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
