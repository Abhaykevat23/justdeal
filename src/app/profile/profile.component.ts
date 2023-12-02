import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private router:Router,private http:HttpClient ,private formBuilder:FormBuilder){
    this.profileform = this.formBuilder.group({
      id:[],  
      name: ['',[Validators.pattern('[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],  
      email: ['',[Validators.email,Validators.required,Validators.minLength(12)]] ,
      password: ['',[Validators.pattern('[0-9]+$'),Validators.required,Validators.minLength(4)]] ,
      city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]] 
    })
  }
  profileform:any;
  id:any;

  ngOnInit(): void {
    if(! localStorage.getItem('token') && ! localStorage.getItem('token2')){
      this.router.navigate(['/app-login']);
    }
    else{
      this.id=localStorage.getItem('token2');

      this.http.get('http://localhost/JD-API/user/view-profile.php?id=' + this.id).subscribe(
        (data: any) => {
          this.profileform.patchValue(data.data);
        }
      )
    }

  }
  // data=this.profileform.value;
  save(){
    this.http.put('http://localhost/JD-API/user/update-profile.php' , this.profileform.value ).subscribe(
      (data: any) => {
        Swal.fire("Profile Edited!", " Now Relogin Please !", "success"); 
        localStorage.removeItem('token');
        localStorage.removeItem('token2');
        localStorage.removeItem('token3');
        localStorage.removeItem('token4');
        localStorage.removeItem('token5');
        this.router.navigate(['/app-login']);
      },
      error => {
        alert("check your data or change email");
      });
  }

  get name() { return this.profileform.get('name'); }
  get email() { return this.profileform.get('email'); }
  get password() { return this.profileform.get('password'); }
  get city() { return this.profileform.get('city'); }

}
