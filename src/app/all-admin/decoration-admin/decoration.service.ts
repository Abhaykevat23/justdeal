import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecorationService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/decoration/';

  getdecoration() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createdecoration(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updatedecoration(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSingledecoration(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deletedecoration(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
