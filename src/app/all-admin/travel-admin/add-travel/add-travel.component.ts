import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelServiceService } from '../travel-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent {
  addform:any;

  constructor(private travelservice: TravelServiceService,
    private FormBuilder:FormBuilder){
      this.addform = this.FormBuilder.group({
        'traveller': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        'image': ['',[Validators.required]],
        'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        'mobile':['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        'price': [,[Validators.required,Validators.minLength(3),Validators.pattern('[0-9]+$'),Validators.maxLength(4)]],
      });
    }

  add() {
    this.travelservice.createvehicle(this.addform.value).subscribe(
      (data: any) => {
        Swal.fire("Good job!", "Record Saved!"+ data, "success"); 
      },
      error => {
        alert("error"+error);
      });
  }

  get traveller() { return this.addform.get('traveller'); }
  get city() { return this.addform.get('city'); }
  get mobile() { return this.addform.get('mobile'); }
  get price() { return this.addform.get('price'); }
  get image() { return this.addform.get('image'); }

}
