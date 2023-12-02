import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/education/';

  geteducation() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createeducation(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updateeducation(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSingleeducation(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deleteeducation(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
