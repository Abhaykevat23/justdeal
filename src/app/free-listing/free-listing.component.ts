import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

import { ShopuserService } from './shopuser.service';
@Component({
  selector: 'app-free-listing',
  templateUrl: './free-listing.component.html',
  styleUrls: ['./free-listing.component.css']
})
export class FreeListingComponent implements OnInit{
  doctor = 'doctor';
  travel = 'travel';
  hotel = 'hotel';
  contractor = 'contractor';
  consultant = 'consultant';
  beauty = 'beauty';
  estate = 'estate';
  vehicle = 'vehicle';
  decoration = 'decoration';
  education = 'education';

  nameofuser: any;

  constructor(private router: Router, private shopservice: ShopuserService, private FormBuilder: FormBuilder) { }
  ngOnInit(): void {

    if(localStorage.getItem('shoptoken')){
      this.nameofuser=localStorage.getItem('shoptoken');
    }
    else{
      alert('First Login Please');
      this.router.navigate(['']);
    }
  }

  logout(){
    localStorage.removeItem('shoptoken');
    localStorage.removeItem('shoptoken2');
    localStorage.removeItem('shoptoken3');
    this.router.navigate(['/']);
  }

}
