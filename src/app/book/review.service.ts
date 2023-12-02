import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/JD-API/feedback/';

  review(shopname:any,rate:any,review:any,username:any,usermail:any) {
    return this.http.post(this.baseUrl + 'feedback.php', {shopname,rate,review,username,usermail});
  }
  viewfeedback(data:any){
    return this.http.get(this.baseUrl + 'view-feedback.php?shopname='+data);
  }
}
