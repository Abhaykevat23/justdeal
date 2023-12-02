import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/contractor/';

  getcontractor() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createcontractor(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updatecontractor(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSinglecontractor(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deletecontractor(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
