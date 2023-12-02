import { Component, OnInit } from '@angular/core';
import { TravelServiceService } from '../travel-admin/travel-service.service';
import { DoctorService } from '../doctor-admin/doctor.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HotelService } from '../hotel-admin/hotel.service';
import { BeautyService } from '../beauty-admin/beauty.service';
import { EducationService } from '../education-admin/education.service';
import { vehicleService } from '../vehicle-admin/vehicle.service';
import { DecorationService } from '../decoration-admin/decoration.service';
import { EstateService } from '../estate-admin/estate.service';
import { ContractorService } from '../contractor-admin/contractor.service';
import { ConsultantService } from '../consultant-admin/consultant.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchtraveller: any;
  searchdoctor: any;
  searchrequest: any;
  searchhotel: any;
  searchbeauty: any;
  searchcontractor: any;
  searchconsultant: any;
  searchvehicle: any;
  searchdecoration: any;
  searchestate: any;
  searcheducation: any;

  travels: any;
  doctors: any;
  permissions: any;
  hotels: any;
  beauties: any;
  educations: any;
  vehicles: any;
  contractors: any;
  consultants: any;
  estates: any;
  decorators:any;

  constructor(private travelservice: TravelServiceService,
    private hotelservice: HotelService,
    private doctor: DoctorService,
    private beautyservice:BeautyService,
    private educationservice:EducationService,
    private vehicleservice:vehicleService,
    private decorationservice:DecorationService,
    private estateservice:EstateService,
    private contractorservice:ContractorService,
    private consultantservice:ConsultantService,
    private router: Router,
    private http: HttpClient
  ) { }
  
  data1: any;
  doctorcard = true;
  travelcard = true;

  approve(data: any) {
    this.http.get('http://localhost/JD-API/admin-permission/approved.php?id=' + data).subscribe(
      (result: any) => {
        this.data1 = result.data;
        // alert(this.data1.image);

        if (this.data1.shopfield == 'doctor') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-doctor.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'travel') {
          // alert('travel');
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-travel.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'hotel') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-hotel.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'education') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-education.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'vehicle') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-vehicle.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'estate') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-estate.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'decoration') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-decoration.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'contractor') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-contractor.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'consultant') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-consultant.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else if (this.data1.shopfield == 'beauty') {
          this.http.post('http://localhost/JD-API/admin-permission/add-approved-beauty.php', this.data1).subscribe(
            (result2: any) => {
              this.data1 = result2.data;
              this.reload();
            }
          )
        }
        else {
          alert('noooo');
        }


      }
    )
    this.data1 = data;

    this.http.delete('http://localhost/JD-API/admin-permission/delete-permission.php?id=' + this.data1).subscribe(
      (result3: any) => {
        this.data1 = result3.data;
        // alert("3 :  " + this.data1);
      }
    )

  }

  reject(id: any,user:any) {
    this.http.get('http://localhost/JD-API/mail/rejectshop-mail.php?user=' + user + "&shopuser=" + id).subscribe(
      (data: any) => { })
      this.http.delete('http://localhost/JD-API/admin-permission/delete-permission.php?id=' + id).subscribe((result: any) => { })
      this.reload();
  }
  
  reload() {
    this.ngOnInit();
  }
  
  ngOnInit(): void {
    if (localStorage.getItem('token') == 'AdminOfJustDeal') {
      this.http.get('http://localhost/JD-API/admin-permission/permission-get.php').subscribe(
        (result: any) => {
          this.permissions = result.data;
        }
      )
      this.travelservice.gettravel().subscribe(
        (result: any) => {
          this.travels = result.data;
        }
      )
      this.doctor.getdoctor().subscribe(
        (result: any) => {
          this.doctors = result.data;
        }
      )
      this.hotelservice.gethotel().subscribe(
        (result: any) => {
          this.hotels = result.data;
        }
      )
      this.beautyservice.getbeauty().subscribe(
        (result: any) => {
          this.beauties = result.data;
        }
      )
      this.educationservice.geteducation().subscribe(
        (result: any) => {
          this.educations = result.data;
        }
      )
      this.decorationservice.getdecoration().subscribe(
        (result: any) => {
          this.decorators = result.data;
        }
      )
      this.consultantservice.getconsultant().subscribe(
        (result: any) => {
          this.consultants = result.data;
        }
      )
      this.contractorservice.getcontractor().subscribe(
        (result: any) => {
          this.contractors = result.data;
        }
      )
      this.vehicleservice.getvehicle().subscribe(
        (result: any) => {
          this.vehicles = result.data;
        }
      )
      this.estateservice.getestate().subscribe(
        (result: any) => {
          this.estates = result.data;
        }
      )

    }
    else {
      localStorage.removeItem('token');
      localStorage.removeItem('token2');
      localStorage.removeItem('token3');
      localStorage.removeItem('token4');
      this.router.navigate(['/app-login']);
    }
  }

  deletetravel(travel: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.travelservice.deletevehicle(travel.id).subscribe(data => {
          this.travels = this.travels.filter((u: any) => u !== travel);
        })
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
      }
    })
  }
  deletedoctor(doctor: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.doctor.deletedoctor(doctor.id).subscribe(data => {
          this.doctors = this.doctors.filter((u: any) => u !== doctor);
        })
      }
    })
  }
  deletehotel(hotel: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.hotelservice.deletehotel(hotel.id).subscribe(data => {
          this.hotels = this.hotels.filter((u: any) => u !== hotel);
        })
      }
    })
  }
  
  deletebeauty(beauty: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.beautyservice.deletebeauty(beauty.id).subscribe(data => {
          this.beauties = this.beauties.filter((u: any) => u !== beauty);
        })
      }
    })
  }
  deletecontractor(contractor: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.contractorservice.deletecontractor(contractor.id).subscribe(data => {
          this.contractors = this.contractors.filter((u: any) => u !== contractor);
        })
      }
    })
  }
  deleteconsultant(consultant: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.consultantservice.deleteconsultant(consultant.id).subscribe(data => {
          this.consultants = this.consultants.filter((u: any) => u !== consultant);
        })
      }
    })
  }
  deletedecorator(decorator: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.decorationservice.deletedecoration(decorator.id).subscribe(data => {
          this.decorators = this.decorators.filter((u: any) => u !== decorator);
        })
      }
    })
  }
  deleteeducation(education: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.educationservice.deleteeducation(education.id).subscribe(data => {
          this.educations = this.educations.filter((u: any) => u !== education);
        })
      }
    })
  }
  deletevehicle(vehicle: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.vehicleservice.deletevehicle(vehicle.id).subscribe(data => {
          this.vehicles = this.vehicles.filter((u: any) => u !== vehicle);
        })
      }
    })
  }
  deleteestate(estate: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')                                          //delete code--------
        this.estateservice.deleteestate(estate.id).subscribe(data => {
          this.estates = this.estates.filter((u: any) => u !== estate);
        })
      }
    })
  }



  // hide show     admin watch bookings--messages---payment
  dtravel = false;
  ddoctor = false;
  drestaurant = false;
  dcontractor = false;
  dconsultant = false;
  drealestate = false;
  dvehicle = false;
  dbeauty = false;
  deducation = false;
  ddecoration = false;
  dadmin = true;
  Travel() {
    this.dtravel = true;
    this.ddoctor = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Doctor() {
    this.ddoctor = true;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Restaurant() {
    this.drestaurant = true;
    this.ddoctor = false;
    this.dtravel = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Contractor() {
    this.dcontractor = true;
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Consultant() {
    this.dconsultant = true;
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Realestate() {
    this.drealestate = true;
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Vehicle() {
    this.dvehicle = true;
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dbeauty = false;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Beauty() {
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = true;
    this.deducation = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Education() {
    this.deducation = true;
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.ddecoration = false;
    this.dadmin = false;
  }
  Decoration() {
    this.ddecoration = true;
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.dadmin = false;
  }
  admin() {
    this.ddecoration = false;
    this.ddoctor = false;
    this.dtravel = false;
    this.drestaurant = false;
    this.dcontractor = false;
    this.dconsultant = false;
    this.drealestate = false;
    this.dvehicle = false;
    this.dbeauty = false;
    this.deducation = false;
    this.dadmin = true;
  }

}
