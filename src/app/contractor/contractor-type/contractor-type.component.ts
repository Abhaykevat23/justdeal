import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contractor-type',
  templateUrl: './contractor-type.component.html',
  styleUrls: ['./contractor-type.component.css']
})
export class ContractorTypeComponent {
  constructor(private url: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  contractors: any;
  contractortype: any;
  transfer(dataid: any) {
    this.router.navigate(['/book', dataid, 'contractor']);
  }

  store: any;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

      this.store = localStorage.getItem('token4');
      this.contractortype = this.url.snapshot.params['type'];
      // alert(this.contractortype)
      if (this.contractortype == 'builder') {
        this.http.get('http://localhost/JD-API/contractor/view-builder.php?city=' + this.store).subscribe(
          (result: any) => {
            this.contractors = result.data;
          }
        )
      }

      if (this.contractortype == 'architech') {
        this.http.get('http://localhost/JD-API/contractor/view-architech.php?city=' + this.store).subscribe(
          (result: any) => {
            this.contractors = result.data;
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
