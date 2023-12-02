import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DecorationService } from '../decoration.service';

@Component({
  selector: 'app-edit-decoration',
  templateUrl: './edit-decoration.component.html',
  styleUrls: ['./edit-decoration.component.css']
})
export class EditDecorationComponent {
  editdecoration: any;
  decoration_id: any;

  constructor(private FormBuilder: FormBuilder, private url: ActivatedRoute,
    private router: Router, private http: HttpClient,private decorationservice:DecorationService){

      this.editdecoration = this.FormBuilder.group({
        id:[],
        decoratorname: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        image: ['',[Validators.required]],
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        time: ['',[Validators.required,Validators.minLength(10)]],
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
      });
  }


  ngOnInit(): void {
    this.decoration_id = this.url.snapshot.params['id'];
    // alert(this.decoration_id)
    if (this.decoration_id > 0) {
      this.decorationservice.getSingledecoration(this.decoration_id).subscribe(
        (data: any) => {
          this.editdecoration.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.decorationservice.updatedecoration(this.editdecoration.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  
  get decorationname() { return this.editdecoration.get('decorationname'); }
  get decorationcity() { return this.editdecoration.get('city'); }
  get decorationmobile() { return this.editdecoration.get('mobile'); }
  get decorationtime() { return this.editdecoration.get('time'); }
  get decorationaddress() { return this.editdecoration.get('address'); }
  get decorationimage() { return this.editdecoration.get('image'); }
}
