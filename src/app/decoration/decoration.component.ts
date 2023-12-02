import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.css']
})
export class DecorationComponent {
  decorations: any;
  searchbus: any;
  constructor(private http: HttpClient, private router: Router) { }

  transfer(data: any) {
    this.router.navigate(['/book', data, 'decoration']);
  }
  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.store = localStorage.getItem('token4');
      this.http.get('http://localhost/JD-API/decoration/view-decoration.php?city=' + this.store).subscribe(
        (result: any) => {
          this.decorations = result.data;
        }
      )
    }
    else{
      alert('First You Need To Login Please');
      this.router.navigate(['/app-login']);
    }
  }
}
