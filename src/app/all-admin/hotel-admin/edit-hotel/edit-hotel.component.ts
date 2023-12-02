import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent {
  editform:any;
  hotel_id: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private hotelservice:HotelService,
    private url:ActivatedRoute ){
      this.editform = this.formBuilder.group({
        id:[],
        hotelname: [''],  
        image: ['',[Validators.required]],    
        city: [''] ,
        mobile: [''] ,
        veg: [''],   
        address: [''],   
        time: [''],   
      })
  }
  ngOnInit(): void {
    this.hotel_id = this.url.snapshot.params['id'];
    // alert(this.hotel_id)
    if (this.hotel_id > 0) {
      this.hotelservice.getSinglehotel(this.hotel_id).subscribe(
        (data: any) => {
          this.editform.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.hotelservice.updatehotel(this.editform.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  get hotelname() { return this.editform.get('hotelname'); }
  get hotelcity() { return this.editform.get('city'); }
  get hotelmobile() { return this.editform.get('mobile'); }
  get hotelveg() { return this.editform.get('veg'); }
  get hoteltime() { return this.editform.get('time'); }
  get hoteladdress() { return this.editform.get('address'); }
  get hotelimage() { return this.editform.get('image'); }

}
