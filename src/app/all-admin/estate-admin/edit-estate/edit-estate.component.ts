import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EstateService } from '../estate.service';

@Component({
  selector: 'app-edit-estate',
  templateUrl: './edit-estate.component.html',
  styleUrls: ['./edit-estate.component.css']
})
export class EditEstateComponent {
  editestate: any;
  estate_id: any;

  constructor(private FormBuilder: FormBuilder, private url: ActivatedRoute,
    private router: Router, private http: HttpClient,private estateservice:EstateService){

      this.editestate = this.FormBuilder.group({
        id:[],
        estatename: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        image: ['',[Validators.required]],
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        time: ['',[Validators.required,Validators.minLength(10)]],
        field: ['',[Validators.required]],
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
      });
  }


  ngOnInit(): void {
    this.estate_id = this.url.snapshot.params['id'];
    // alert(this.estate_id)
    if (this.estate_id > 0) {
      this.estateservice.getSingleestate(this.estate_id).subscribe(
        (data: any) => {
          this.editestate.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.estateservice.updateestate(this.editestate.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  
  get estatename() { return this.editestate.get('estatename'); }
  get estatecity() { return this.editestate.get('city'); }
  get estatemobile() { return this.editestate.get('mobile'); }           //estate
  get estatefield() { return this.editestate.get('field'); }
  get estatetime() { return this.editestate.get('time'); }
  get estateaddress() { return this.editestate.get('address'); }
  get estateimage() { return this.editestate.get('image'); }
}
