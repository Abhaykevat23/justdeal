import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DoctorService } from '../doctor.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  addform:any;

  constructor(private doctor: DoctorService,
    private FormBuilder:FormBuilder,private router:Router){
      this.addform = this.FormBuilder.group({
        'name': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        'field': ['',Validators.required],
        'time': ['',[Validators.required,Validators.minLength(10)]],
        'mobile':['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        'city':['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        'address':['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]],
        'sunday':['',[Validators.required]],
        'image':['',[Validators.required]]
      });
    }

  add(){
    this.doctor.createdoctor(this.addform.value).subscribe(
      (data: any) => {
        Swal.fire("Good job!", "Record Saved!"+ data, "success"); 
        this.router.navigate(['/app-admin']);
      },
      error => {
        alert("error"+error);
      });
  }

  get name() { return this.addform.get('name'); }
  get image() { return this.addform.get('image'); }
  get field() { return this.addform.get('field'); }
  get city() { return this.addform.get('city'); }
  get mobile() { return this.addform.get('mobile'); }
  get address() { return this.addform.get('address'); }
  get sunday() { return this.addform.get('sunday'); }
  get time() { return this.addform.get('time'); }
}
