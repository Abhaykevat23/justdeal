import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-travel',
  templateUrl: './display-travel.component.html',
  styleUrls: ['./display-travel.component.css']
})
export class DisplayTravelComponent {
  travels: any;
  searchbus: any;
  constructor(private http: HttpClient, private router: Router) { }

  transfer(data: any) {
    // alert(data);
    this.router.navigate(['/book', data, 'travel']);
  }
  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.store = localStorage.getItem('token4');
      this.http.get('http://localhost/JD-API/travel/view-bus.php?city=' + this.store).subscribe(
        (result: any) => {
          this.travels = result.data;
        }
      )
    }
    else{
      alert('First You Need To Login Please');
      this.router.navigate(['/app-login']);
    }
  }
}