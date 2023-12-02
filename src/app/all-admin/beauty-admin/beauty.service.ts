import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeautyService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/beauty/';
  getbeauty() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createbeauty(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updatebeauty(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSinglebeauty(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deletebeauty(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
