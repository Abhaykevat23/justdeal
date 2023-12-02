import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-edit-consultant',
  templateUrl: './edit-consultant.component.html',
  styleUrls: ['./edit-consultant.component.css']
})
export class EditConsultantComponent {
  editconsultant: any;
  consultant_id: any;

  constructor(private FormBuilder: FormBuilder, private url: ActivatedRoute,
    private router: Router, private http: HttpClient,private consultantservice:ConsultantService){

      this.editconsultant = this.FormBuilder.group({
        id:[],
        lawyername: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        // image: ['',[Validators.required]],
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        time: ['',[Validators.required,Validators.minLength(10)]],
        sunday: ['',[Validators.required]],
        price: ['',[Validators.required,Validators.maxLength(4)]],
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
      });
  }


  ngOnInit(): void {
    this.consultant_id = this.url.snapshot.params['id'];
    // alert(this.consultant_id)
    if (this.consultant_id > 0) {
      this.consultantservice.getSingleconsultant(this.consultant_id).subscribe(
        (data: any) => {
          this.editconsultant.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.consultantservice.updateconsultant(this.editconsultant.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => { 
        alert(error);
      });
  }

  get consultantname() { return this.editconsultant.get('lawyername'); }
  get consultantcity() { return this.editconsultant.get('city'); }
  get consultantmobile() { return this.editconsultant.get('mobile'); }             //consultant
  get consultantsunday() { return this.editconsultant.get('sunday'); }
  get consultantprice() { return this.editconsultant.get('price'); }
  get consultanttime() { return this.editconsultant.get('time'); }
  get consultantaddress() { return this.editconsultant.get('address'); }
  get consultantimage() { return this.editconsultant.get('image'); }
}
