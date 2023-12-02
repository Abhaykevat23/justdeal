import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css']
})
export class VehicleTypeComponent {
  constructor(private url: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  vehicles: any;
  vehicletype: any;
  transfer(dataid: any) {
    this.router.navigate(['/book', dataid, 'vehicle']);
  }

  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

      this.store = localStorage.getItem('token4');
      this.vehicletype = this.url.snapshot.params['type'];
      // alert(this.vehicletype)
      if (this.vehicletype == 'bike') {
        this.http.get('http://localhost/JD-API/vehicle/view-bike.php?city=' + this.store).subscribe(
          (result: any) => {
            this.vehicles = result.data;
          }
        )
      }

      if (this.vehicletype == 'car') {
        this.http.get('http://localhost/JD-API/vehicle/view-car.php?city=' + this.store).subscribe(
          (result: any) => {
            this.vehicles = result.data;
          }
        )
      }
    }
    else {
      alert('First You Need To Login Please');
      this.router.navigate(['/app-login']);
    }
  }
}
