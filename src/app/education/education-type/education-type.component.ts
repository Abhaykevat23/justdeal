import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-education-type',
  templateUrl: './education-type.component.html',
  styleUrls: ['./education-type.component.css']
})
export class EducationTypeComponent {
  constructor(private url: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  educations: any;
  educationtype: any;
  transfer(dataid: any) {
    this.router.navigate(['/book', dataid, 'education']);
  }

  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

      this.store = localStorage.getItem('token4');
      this.educationtype = this.url.snapshot.params['type'];
      // alert(this.educationtype)
      if (this.educationtype == 'school') {
        this.http.get('http://localhost/JD-API/education/view-school.php?city=' + this.store).subscribe(
          (result: any) => {
            this.educations = result.data;
          }
        )
      }

      if (this.educationtype == 'college') {
        this.http.get('http://localhost/JD-API/education/view-college.php?city=' + this.store).subscribe(
          (result: any) => {
            this.educations = result.data;
          }
        )
      }

      if (this.educationtype == 'computer') {
        this.http.get('http://localhost/JD-API/education/view-computer.php?city=' + this.store).subscribe(
          (result: any) => {
            this.educations = result.data;
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
