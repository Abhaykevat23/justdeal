import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class vehicleService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/vehicle/';

  getvehicle() {
    return this.http.get(this.baseUrl + 'view.php');
  }
  createvehicle(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updatevehicle(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data);
  }
  getSinglevehicle(id: any) {
    return this.http.get(this.baseUrl + 'view.php?id=' + id);
  }
  deletevehicle(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
