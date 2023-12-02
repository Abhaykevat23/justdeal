import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {
  editeducation: any;
  education_id: any;

  constructor(private FormBuilder: FormBuilder, private url: ActivatedRoute,
    private router: Router, private http: HttpClient,private educationservice:EducationService){

      this.editeducation = this.FormBuilder.group({
        id:[],
        schoolname: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        image: ['',[Validators.required]],
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        time: ['',[Validators.required,Validators.minLength(10)]],
        field: ['',[Validators.required]],
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
      });
  }


  ngOnInit(): void {
    this.education_id = this.url.snapshot.params['id'];
    // alert(this.education_id)
    if (this.education_id > 0) {
      this.educationservice.getSingleeducation(this.education_id).subscribe(
        (data: any) => {
          this.editeducation.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.educationservice.updateeducation(this.editeducation.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  
  get educationname() { return this.editeducation.get('schoolname'); }
  get educationcity() { return this.editeducation.get('city'); }
  get educationmobile() { return this.editeducation.get('mobile'); }           //education
  get educationfield() { return this.editeducation.get('field'); }
  get educationtime() { return this.editeducation.get('time'); }
  get educationaddress() { return this.editeducation.get('address'); }
  get educationimage() { return this.editeducation.get('image'); }
}
