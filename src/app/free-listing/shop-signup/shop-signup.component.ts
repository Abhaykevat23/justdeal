import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopuserService } from '../shopuser.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-shop-signup',
  templateUrl: './shop-signup.component.html',
  styleUrls: ['./shop-signup.component.css']
})
export class ShopSignupComponent {
  addform: any;
  constructor(private router: Router, private shopservice: ShopuserService, private FormBuilder: FormBuilder) {
    this.addform = this.FormBuilder.group({
      'name': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'email': ['', [Validators.email, Validators.required, Validators.minLength(12)]],
      'password': ['', [Validators.pattern('[0-9]+$'), Validators.required, Validators.minLength(4)]],
      // 'sub': ['',[Validators.required]]
    });
  }
  // subscribe temp data 
  // sub: any;
  // ,addform1.value.sub

  shopusersignup(addform1: { value: { name: any; email: any; password: any }; }) {

    if (addform1.value.email == '' && addform1.value.name == '' && addform1.value.password == '') {
      alert('Please Enter Your Data');
    }
    else {

      this.shopservice.addshopuser(addform1.value.name, addform1.value.email, addform1.value.password).pipe(first()).subscribe(
        (data: any) => {
          Swal.fire("Sign-up Success ", "Now Log-in Please", "success");
          this.router.navigate(['/shoplogin']);
        },
        (error: any) => {
          alert('error');
        }
      );
    }
  }


  get email() { return this.addform.get('email'); }
  get password() { return this.addform.get('password'); }
  // get sub() { return this.addform.get('sub'); }
  get name() { return this.addform.get('name'); }
}
