import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    this.forgotform = this.formBuilder.group({
      'email': ['', [Validators.email, Validators.required]]
    })
  }
  forgotform: any;
  data: any;
  data1: any;
  send() {
    this.data = this.forgotform.value;
    // alert(this.data.email);
    this.http.get('http://localhost/JD-API/mail/forgot.php?email=' + this.data.email).subscribe(
      (result: any) => {
        this.data1 = result.data;
        // alert(this.data1[0].password);

        this.http.get('http://localhost/JD-API/mail/forgot-mail.php?user=' + this.data.email + '&password=' + this.data1[0].password).subscribe(
          (data: any) => {
            // alert(data);
            Swal.fire("Password Sended", data, "success");
          })
      }
    )
  }

  get email() { return this.forgotform.get('email'); }

}
