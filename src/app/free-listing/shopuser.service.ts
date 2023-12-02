import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopuserService {

  constructor(private http: HttpClient, private router: Router) { }
  baseUrl: string = 'http://localhost/JD-API/shopuser/';
  baseUrl2: string = 'http://localhost/JD-API/admin-permission/';

  public checkshopuser(username: any, password: any) {
    return this.http.post<any>(this.baseUrl + 'shopuserlogin.php', { username, password }).pipe(map(result => {
      // alert(result[0].email);
      this.setToken(result[0].name);
      this.setToken2(result[0].id);
      this.setToken3(result[0].email);
      return result[0].email;
    }));
  }
  // subscribe temp data
  // ,sub:any------,sub
  public addshopuser(name: any, email: any, password: any) {
    return this.http.post<any>(this.baseUrl + 'shopuserregister.php', { name, email, password }).pipe(map(result => {
      return result;
    }));
  }


  public requestdoctor(name: any, image: any, city: any, time: any, address: any, sunday: any, mobile: any, field: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-doctor.php', { name, image, city, time, address, sunday, mobile, field, shopfield, user }).pipe(map(result => {
      // alert(result);
      return result;
    }));
  }
  public requesttravel(traveller: any, image: any, city: any, price: any, mobile: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-travel.php', { traveller, image, city, price, mobile, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }
  public requesthotel(hotelname: any, image: any, city: any, veg: any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-hotel.php', { hotelname, image, city, veg, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }
  public requestcontractor(contractorname: any, image: any, city: any, field: any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-contractor.php', { contractorname, image, city, field, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }
  public requestconsultant(consultantname: any, image: any, city: any, price: any,sunday:any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-consultant.php', { consultantname, image, city, price,sunday, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }

  public requestvehicle(vehiclename: any, image: any, city: any,field:any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-vehicle.php', { vehiclename, image, city,field, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }
  public requestestate(estatename: any, image: any, city: any,field:any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-estate.php', { estatename, image, city,field, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }

  public requestbeauty(beautyname: any, image: any, city: any,field:any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-beauty.php', { beautyname, image, city,field, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }

  public requestdecoration(decoratorname: any, image: any, city: any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-decoration.php', { decoratorname, image, city, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }

  public requesteducation(schoolname: any, image: any, city: any,field:any, mobile: any, address: any, time: any, shopfield: any, user: any) {
    return this.http.post<any>(this.baseUrl2 + 'permission-education.php', { schoolname, image, city,field, mobile,address,time, shopfield, user }).pipe(map(result => {
      return result;
    }));
  }



  //token
  setToken(shoptoken: string) {
    localStorage.setItem('shoptoken', shoptoken);
  }
  setToken2(shoptoken2: string) {
    localStorage.setItem('shoptoken2', shoptoken2);
  }
  setToken3(shoptoken3: string) {
    localStorage.setItem('shoptoken3', shoptoken3);
  }
}
