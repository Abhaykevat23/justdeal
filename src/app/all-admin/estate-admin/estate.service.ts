import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/realestate/';

  getestate() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createestate(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updateestate(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSingleestate(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deleteestate(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
