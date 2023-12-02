import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  addhotelform: any;
  constructor(private FormBuilder: FormBuilder,private hotelservice:HotelService) {

    this.addhotelform = this.FormBuilder.group({
      'hotelname': ['', [Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'), Validators.required, Validators.minLength(3)]],
      'image': ['', [Validators.required]],
      'city': ['', [Validators.pattern('[a-z]+$'), Validators.required, Validators.minLength(4)]],
      'mobile': ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+$'), Validators.maxLength(10)]],
      'veg': ['', [Validators.required]],
      'time': ['', [Validators.required, Validators.minLength(10)]],
      'address': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]]
    });
  }
  add() {
    this.hotelservice.createhotel(this.addhotelform.value).subscribe(
      (data: any) => {
        Swal.fire("Good job!", "Record Saved!", "success"); 
      },
      error => {
        alert("error");
      });
  }

  get hotelname() { return this.addhotelform.get('hotelname'); }
  get hotelcity() { return this.addhotelform.get('city'); }
  get hotelmobile() { return this.addhotelform.get('mobile'); }
  get hotelveg() { return this.addhotelform.get('veg'); }
  get hoteltime() { return this.addhotelform.get('time'); }
  get hoteladdress() { return this.addhotelform.get('address'); }
  get hotelimage() { return this.addhotelform.get('image'); }
}
