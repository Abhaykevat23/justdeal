import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent {
  consultants: any;
  searchbus: any;
  constructor(private http: HttpClient, private router: Router) { }

  transfer(data: any) {
    this.router.navigate(['/book', data, 'consultant']);
  }
  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.store = localStorage.getItem('token4');
      this.http.get('http://localhost/JD-API/lawyer/view-consultant.php?city=' + this.store).subscribe(
        (result: any) => {
          this.consultants = result.data;
        }
      )
    }
    else{
      alert('First You Need To Login Please');
      this.router.navigate(['/app-login']);
    }
  }
}
