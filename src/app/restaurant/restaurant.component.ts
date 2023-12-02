import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  hotels: any;
  searchhotel: any;
  constructor(private http: HttpClient, private router: Router) { }

  transfer(data: any) {
    // alert(data);
    this.router.navigate(['/book', data, 'hotel']);
  }
  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.store = localStorage.getItem('token4');
      this.http.get('http://localhost/JD-API/restaurant/view-hotel.php?city=' + this.store).subscribe(
        (result: any) => {
          this.hotels = result.data;
        }
      )
    }
    else{
      alert('First You Need To Login Please');
      this.router.navigate(['/app-login']);
    }
  }
}
