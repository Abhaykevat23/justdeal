import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  addform:any;

  constructor(private router:Router,private loginservice:LoginService,private FormBuilder:FormBuilder){
    this.addform = this.FormBuilder.group({
      'name': ['',[Validators.pattern('[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'email': ['',[Validators.email,Validators.required,Validators.minLength(12)]],
      'password': ['',[Validators.pattern('[0-9]+$'),Validators.required,Validators.minLength(4)]]
    });
  }

  signup(addform1: { value: { name: any; email: any; password: any;city: any; }; }) {
    if(addform1.value.email == '' && addform1.value.name == '' && addform1.value.password == '' && addform1.value.city == '')
    {
      alert('Please Enter Your Data');
    }
    else{
      this.loginservice.adduser(addform1.value.name, addform1.value.email, addform1.value.password,addform1.value.city ).pipe(first()).subscribe(
      (data:any) => {
          Swal.fire("Sign-up Success ", "Now Log-in Please", "success");
          this.router.navigate(['/app-login'])
        },
        (error:any) => {
          alert('error'); 
        }
      );
    }
  }
  get email() { return this.addform.get('email'); }
  get password() { return this.addform.get('password'); }
  get name() { return this.addform.get('name'); }
  get city() { return this.addform.get('city'); }
}
