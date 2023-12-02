import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/lawyer/';

  getconsultant() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createconsultant(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updateconsultant(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSingleconsultant(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deleteconsultant(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
