import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/restaurant/';

  gethotel() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createhotel(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updatehotel(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSinglehotel(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deletehotel(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
