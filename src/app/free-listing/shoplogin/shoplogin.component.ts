import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopuserService } from '../shopuser.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-shoplogin',
  templateUrl: './shoplogin.component.html',
  styleUrls: ['./shoplogin.component.css']
})
export class ShoploginComponent implements OnInit{
  loginform: any;

  constructor(private router:Router,private shopservice:ShopuserService,private FormBuilder:FormBuilder){
    this.loginform = this.FormBuilder.group({
      'email': ['',[Validators.email,Validators.required,Validators.minLength(10)]],
      'password': ['',[Validators.pattern('[0-9]+$'),Validators.required,Validators.minLength(4)]]
    });
  }
  ngOnInit(): void {
    if(localStorage.getItem('shoptoken')){
      this.router.navigate(['/free-listing']);
    }
  }

  get email() { return this.loginform.get('email'); }
  get password() { return this.loginform.get('password'); }
  
  shopuserlogin(loginform1: { value: { email: any; password: any; }; }) {
    if (loginform1.value.email == '' && loginform1.value.password == '') {
      alert('Please Enter Your Data');
    }
    else {
      this.shopservice.checkshopuser(loginform1.value.email, loginform1.value.password).pipe(first()).subscribe(
        (data: any) => {
          this.router.navigate(['/free-listing']);
          Swal.fire("Log-in Success ", "List Your Business With JD", "success");
        },
        (error) => {
          alert("User name or password is incorrect")
        });
    }
  }

}
