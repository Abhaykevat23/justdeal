import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  editform:any;
  doctor_id: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private doctor:DoctorService,
    private url:ActivatedRoute ){
      this.editform = this.formBuilder.group({
        id:[],
        field: ['',Validators.required],  
        name: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],  
        sunday: ['',Validators.required] ,
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]] ,
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]] ,
        time: ['',[Validators.required,Validators.minLength(10)]] ,
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]] ,
        image: ['',Validators.required]
      })
  }
  ngOnInit(): void {
    this.doctor_id = this.url.snapshot.params['id'];
    if (this.doctor_id > 0) {
      this.doctor.getSingledoctor(this.doctor_id).subscribe(
        (data: any) => {
          this.editform.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.doctor.updatedoctor(this.editform.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success");
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  get name() { return this.editform.get('name'); }
  get image() { return this.editform.get('image'); }
  get field() { return this.editform.get('field'); }
  get city() { return this.editform.get('city'); }
  get mobile() { return this.editform.get('mobile'); }
  get address() { return this.editform.get('address'); }
  get sunday() { return this.editform.get('sunday'); }
  get time() { return this.editform.get('time'); }
}
