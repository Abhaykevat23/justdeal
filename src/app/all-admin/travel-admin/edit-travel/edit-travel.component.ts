import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelServiceService } from '../travel-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-travel',
  templateUrl: './edit-travel.component.html',
  styleUrls: ['./edit-travel.component.css']
})
export class EditTravelComponent implements OnInit{
  editform:any;
  travel_id: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private travelservice:TravelServiceService,
    private url:ActivatedRoute ){
      this.editform = this.formBuilder.group({
        id:[],
        traveller: [''],  
        image: [''],    
        city: [''] ,
        mobile: [''] ,
        price: ['']   
      })
    }
    ngOnInit(): void {
      this.travel_id = this.url.snapshot.params['id'];
      alert(this.travel_id)
      if (this.travel_id > 0) {
        this.travelservice.getSingletravel(this.travel_id).subscribe(
          (data: any) => {
            this.editform.patchValue(data.data);
          }
          )
        }
      }
      
      edit() {
        this.travelservice.updatevehicle(this.editform.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
        console.log(error);
      });
    }
    
  get traveller() { return this.editform.get('traveller'); }
  get city() { return this.editform.get('city'); }
  get mobile() { return this.editform.get('mobile'); }
  get time() { return this.editform.get('time'); }
  get price() { return this.editform.get('price'); }
  get image() { return this.editform.get('image'); }
}
