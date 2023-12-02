import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { travel } from './travel';

@Injectable({
  providedIn: 'root'
})
export class TravelServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/travel/';

  gettravel() {
    return this.http.get<travel[]>(this.baseUrl + 'view.php');
  }
  createvehicle(data: any) {
    return this.http.post(this.baseUrl + 'insert.php', data);
  }
  updatevehicle(data: any) {
    return this.http.put(this.baseUrl + 'update.php', data ) ;
  }
  getSingletravel(id: any) {
    return this.http.get<travel[]>(this.baseUrl + 'view.php?id=' + id);
  }
  deletevehicle(id: any) {
    return this.http.delete(this.baseUrl + 'delete.php?id=' + id);
  }
}
