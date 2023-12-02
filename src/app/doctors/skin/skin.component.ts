import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrls: ['./skin.component.css']
})
export class SkinComponent {
  constructor(private url: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  doctors: any;
  doctorfield: any;
    transfer(dataid:any){
      // alert(data);
      this.router.navigate(['/book',dataid,'doctor']);
    }

  store: any;
  
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.store=localStorage.getItem('token4');
      this.doctorfield = this.url.snapshot.params['doctor'];
      // alert(this.doctorfield);
      if (this.doctorfield == 'skin') {
        // alert('skin');
        this.http.get('http://localhost/JD-API/doctor/view-skin.php?city='+this.store).subscribe(
          (result: any) => {
            this.doctors = result.data;
            console.log(result.data);
          }
        )
      }
  
      if (this.doctorfield == 'brain') {
        // alert('brain');
        this.http.get('http://localhost/JD-API/doctor/view-brain.php?city='+this.store).subscribe(
          (result: any) => {
            this.doctors = result.data;
          }
        )
      }
      if (this.doctorfield == 'eye') {
        // alert('eye');
        this.http.get('http://localhost/JD-API/doctor/view-eye.php?city='+this.store).subscribe(
          (result: any) => {
            this.doctors = result.data;
          }
        )
      }
    }
    else{
      alert('First You Need To Login Please');
      this.router.navigate(['/app-login']);
    }
  }
}
