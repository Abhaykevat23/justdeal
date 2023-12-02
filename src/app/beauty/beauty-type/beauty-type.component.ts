import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beauty-type',
  templateUrl: './beauty-type.component.html',
  styleUrls: ['./beauty-type.component.css']
})
export class BeautyTypeComponent {
  constructor(private url: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  beautys: any;
  beautytype: any;
  transfer(dataid: any) {
    this.router.navigate(['/book', dataid, 'beauty']);
  }

  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

      this.store = localStorage.getItem('token4');
      this.beautytype = this.url.snapshot.params['type'];
      // alert(this.beautytype)
      if (this.beautytype == 'boys') {
        this.http.get('http://localhost/JD-API/beauty/view-boys.php?city=' + this.store).subscribe(
          (result: any) => {
            this.beautys = result.data;
            console.log(result.data);
          }
        )
      }

      if (this.beautytype == 'girls') {
        this.http.get('http://localhost/JD-API/beauty/view-girls.php?city=' + this.store).subscribe(
          (result: any) => {
            this.beautys = result.data;
          }
        )
      }
      if (this.beautytype == 'family') {
        this.http.get('http://localhost/JD-API/beauty/view-family.php?city=' + this.store).subscribe(
          (result: any) => {
            this.beautys = result.data;
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
