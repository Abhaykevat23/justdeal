import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent {
  constructor(private url: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  estates: any;
  estatetype: any;
  transfer(dataid: any) {
    this.router.navigate(['/book', dataid, 'estate']);
  }

  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

      this.store = localStorage.getItem('token4');
      this.estatetype = this.url.snapshot.params['type'];
      // alert(this.estatetype)
      if (this.estatetype == 'buy') {
        this.http.get('http://localhost/JD-API/realestate/view-buy.php?city=' + this.store).subscribe(
          (result: any) => {
            this.estates = result.data;
            console.log(result.data);
          }
        )
      }

      if (this.estatetype == 'rent') {
        this.http.get('http://localhost/JD-API/realestate/view-rent.php?city=' + this.store).subscribe(
          (result: any) => {
            this.estates = result.data;
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
