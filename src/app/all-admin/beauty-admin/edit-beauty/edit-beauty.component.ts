import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BeautyService } from '../beauty.service';

@Component({
  selector: 'app-edit-beauty',
  templateUrl: './edit-beauty.component.html',
  styleUrls: ['./edit-beauty.component.css']
})
export class EditBeautyComponent {
  editbeauty: any;
  beauty_id: any;

  constructor(private FormBuilder: FormBuilder, private url: ActivatedRoute,
    private router: Router, private http: HttpClient,private beautyservice:BeautyService){

      this.editbeauty = this.FormBuilder.group({
        id:[],
        beautyname: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        image: ['',[Validators.required]],
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        time: ['',[Validators.required,Validators.minLength(10)]],
        field: ['',[Validators.required]],
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
      });
  }


  ngOnInit(): void {
    this.beauty_id = this.url.snapshot.params['id'];
    // alert(this.beauty_id)
    if (this.beauty_id > 0) {
      this.beautyservice.getSinglebeauty(this.beauty_id).subscribe(
        (data: any) => {
          this.editbeauty.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.beautyservice.updatebeauty(this.editbeauty.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  
  get beautyname() { return this.editbeauty.get('beautyname'); }
  get beautycity() { return this.editbeauty.get('city'); }
  get beautymobile() { return this.editbeauty.get('mobile'); }           //beauty
  get beautyfield() { return this.editbeauty.get('field'); }
  get beautytime() { return this.editbeauty.get('time'); }
  get beautyaddress() { return this.editbeauty.get('address'); }
  get beautyimage() { return this.editbeauty.get('image'); }
  
}
