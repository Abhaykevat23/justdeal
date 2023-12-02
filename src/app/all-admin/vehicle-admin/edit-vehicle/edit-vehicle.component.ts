import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { vehicleService } from '../vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent {
  editvehicle: any;
  vehicle_id: any;

  constructor(private FormBuilder: FormBuilder, private url: ActivatedRoute,
    private router: Router, private http: HttpClient,private vehicleservice:vehicleService){

      this.editvehicle = this.FormBuilder.group({
        id:[],
        vehiclename: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        image: ['',[Validators.required]],
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        time: ['',[Validators.required,Validators.minLength(10)]],
        field: ['',[Validators.required]],
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
      });
  }


  ngOnInit(): void {
    this.vehicle_id = this.url.snapshot.params['id'];
    if (this.vehicle_id > 0) {
      this.vehicleservice.getSinglevehicle(this.vehicle_id).subscribe(
        (data: any) => {
          this.editvehicle.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.vehicleservice.updatevehicle(this.editvehicle.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  
  get vehiclename() { return this.editvehicle.get('vehiclename'); }
  get vehiclecity() { return this.editvehicle.get('city'); }
  get vehiclemobile() { return this.editvehicle.get('mobile'); }           //vehicle
  get vehiclefield() { return this.editvehicle.get('field'); }
  get vehicletime() { return this.editvehicle.get('time'); }
  get vehicleaddress() { return this.editvehicle.get('address'); }
  get vehicleimage() { return this.editvehicle.get('image'); }
}
