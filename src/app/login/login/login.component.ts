import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addform:any;

  constructor(private router:Router,private loginservice:LoginService,private FormBuilder:FormBuilder){
    this.addform = this.FormBuilder.group({
      'email': ['',[Validators.email,Validators.required,Validators.minLength(12)]],
      'password': ['',[Validators.pattern('[0-9]+$'),Validators.required,Validators.minLength(4)]],
    });
  }
  get email() { return this.addform.get('email'); }
  get password() { return this.addform.get('password'); }

  login(addform1: { value: { email: any; password: any; }; }) {
      this.loginservice.checkuser(addform1.value.email, addform1.value.password).pipe(first()).subscribe(
        (data:any) => {
          Swal.fire("Log-in Success ", "Enjoy JUSTDEAL ", "success");
          this.router.navigate(['']);
        },
        error => {
          alert("User name or password is incorrect")
        });      
        
  }
}