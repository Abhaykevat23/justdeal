import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs';
import Swal from 'sweetalert2';
import { shopuser } from '../free-listing/shopuser';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private url: ActivatedRoute, private router: Router, private http: HttpClient, private formBuilder: FormBuilder,private reviewservice:ReviewService) {
    this.reviewform = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]$')]],
      'email': ['', [Validators.required, Validators.email]],
      'rate': ['', [Validators.required]],
      'review': ['', [Validators.required, Validators.maxLength(30), Validators.minLength(4)]]
    })
  }

  things: any;
  feedbacks:any;
  id: any;
  field: any;
  reviewform: any;

  //hide show variables
  doctord = false;
  traveld = false;
  hoteld = false;
  estated = false;
  vehicled = false;
  beautyd = false;
  contractord = false;
  consultantd = false;
  decorationd = false;
  educationd=false;

  username: any;
  usermail: any;
  ngOnInit(): void {
    this.username = localStorage.getItem('token');
    this.usermail = localStorage.getItem('token3');

    if (localStorage.getItem('token')) {
      this.id = this.url.snapshot.params['id'];
      this.field = this.url.snapshot.params['field'];
      
      if (this.field == 'doctor') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-doctor.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.doctord = true;

            this.reviewservice.viewfeedback(this.things.name).subscribe(      //reviews code
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'travel') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-travel.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.traveld = true;
            this.reviewservice.viewfeedback(this.things.traveller).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'hotel') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-hotel.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.hoteld = true;
            this.reviewservice.viewfeedback(this.things.name).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'estate') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-estate.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.estated = true;
            this.reviewservice.viewfeedback(this.things.estatename).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'education') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-education.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.educationd = true;
            this.reviewservice.viewfeedback(this.things.schoolname).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'beauty') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-beauty.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.beautyd = true;
            this.reviewservice.viewfeedback(this.things.beautyname).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'vehicle') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-vehicle.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.vehicled = true;
            this.reviewservice.viewfeedback(this.things.vehiclename).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'decoration') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-decoration.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.decorationd = true;
            this.reviewservice.viewfeedback(this.things.decoratorname).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'contractor') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-contractor.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.contractord = true;
            this.reviewservice.viewfeedback(this.things.contractorname).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
      else if (this.field == 'consultant') {
        this.http.get('http://localhost/JD-API/selected-booking/view-selected-consultant.php?id=' + this.id).subscribe(
          (result: any) => {
            this.things = result.data;
            this.consultantd = true;
            this.reviewservice.viewfeedback(this.things.lawyername).subscribe(
              (result: any) => {
                this.feedbacks = result.data;
              })
          })
      }
    }
    else {
      this.router.navigate(['/app-login']);
    }
  }


  //data var

  email = localStorage.getItem('token3');

  enqire(name: any, mobile: any) {
    alert("wait for few seconds");
    this.http.get('http://localhost/JD-API/mail/sendmail.php?name=' + name + '&mobile=' + mobile + '&user=' + this.email).subscribe(
      (data: any) => {
        alert(data);
      })
  }

temp:any;
  feedback(shopname: any) {
    this.temp=this.reviewform.value;
    // alert(this.temp.review)
    this.reviewservice.review(shopname,this.temp.rate,this.temp.review,this.username,this.usermail).subscribe(
      (data: any) => {
        Swal.fire("Good job!", "Review Saved.", "success"); 
        
        // alert(data.data);
      },
      error => {
        alert("Check data");
      });
      this.ngOnInit();
  }
}

