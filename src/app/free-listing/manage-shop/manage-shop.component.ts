import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeautyService } from 'src/app/all-admin/beauty-admin/beauty.service';
import { ConsultantService } from 'src/app/all-admin/consultant-admin/consultant.service';
import { ContractorService } from 'src/app/all-admin/contractor-admin/contractor.service';
import { DecorationService } from 'src/app/all-admin/decoration-admin/decoration.service';
import { DoctorService } from 'src/app/all-admin/doctor-admin/doctor.service';
import { EducationService } from 'src/app/all-admin/education-admin/education.service';
import { EstateService } from 'src/app/all-admin/estate-admin/estate.service';
import { HotelService } from 'src/app/all-admin/hotel-admin/hotel.service';
import { TravelServiceService } from 'src/app/all-admin/travel-admin/travel-service.service';
import { vehicleService } from 'src/app/all-admin/vehicle-admin/vehicle.service';
import Swal from 'sweetalert2';
import { ShopuserService } from '../shopuser.service';

@Component({
  selector: 'app-manage-shop',
  templateUrl: './manage-shop.component.html',
  styleUrls: ['./manage-shop.component.css']
})
export class ManageShopComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient,
    private shopservice: ShopuserService, private doctorservice: DoctorService,
    private travelservice: TravelServiceService, private hotelservice: HotelService, private vehicleservice: vehicleService,
    private beautyservice: BeautyService, private educationservice: EducationService, private estateservice: EstateService,
    private contractorservice: ContractorService, private consultantservice: ConsultantService,
    private decorationservice: DecorationService) {

  }
  travels: any;
  doctors: any;
  hotels: any;
  beauties: any;
  vehicles: any;
  educations: any;
  contractors: any;
  decorations: any;
  consultants: any;
  estates: any;

  selectedValue: any;



  user = localStorage.getItem('shoptoken3');
  ngOnInit(): void {
    this.http.get('http://localhost/JD-API/shopuser/manage-shop.php?user=' + this.user).subscribe(
      (result: any) => {
        this.travels = result.data;
        this.doctors = result.data2;
        this.hotels = result.data3;
        this.vehicles = result.data4;
        this.educations = result.data5;
        this.consultants = result.data6;
        this.contractors = result.data7;
        this.decorations = result.data8;
        this.beauties = result.data9;
        this.estates = result.data10;
        // console.log("travel :" + this.travels[0].mobile)
        // console.log("doctors :" + this.doctors[0].name)
      }
    )

  }

  deletedoctor(doctor_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctorservice.deletedoctor(doctor_id.id).subscribe(
          (data: any) => {
            this.doctors = this.doctors.filter((u: any) => u !== doctor_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deletetravel(travel_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.travelservice.deletevehicle(travel_id.id).subscribe(
          (data: any) => {
            this.travels = this.travels.filter((u: any) => u !== travel_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deletehotel(hotel_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.hotelservice.deletehotel(hotel_id.id).subscribe(
          (data: any) => {
            this.hotels = this.hotels.filter((u: any) => u !== hotel_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deleteestate(estate_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.estateservice.deleteestate(estate_id.id).subscribe(
          (data: any) => {
            this.estates = this.estates.filter((u: any) => u !== estate_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deletevehicle(vehicle_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vehicleservice.deletevehicle(vehicle_id.id).subscribe(
          (data: any) => {
            this.vehicles = this.vehicles.filter((u: any) => u !== vehicle_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deletedecoration(decoration_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.decorationservice.deletedecoration(decoration_id.id).subscribe(
          (data: any) => {
            this.decorations = this.decorations.filter((u: any) => u !== decoration_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deletebeauty(beauty_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.beautyservice.deletebeauty(beauty_id.id).subscribe(
          (data: any) => {
            this.beauties = this.beauties.filter((u: any) => u !== beauty_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deleteconsultant(consultant_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.consultantservice.deleteconsultant(consultant_id.id).subscribe(
          (data: any) => {
            this.consultants = this.consultants.filter((u: any) => u !== consultant_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deletecontractor(contractor_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contractorservice.deletecontractor(contractor_id.id).subscribe(
          (data: any) => {
            this.contractors = this.contractors.filter((u: any) => u !== contractor_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }
  deleteeducation(education_id: any) {
    Swal.fire({
      title: 'Are you sure ?', text: "You can't be able to recover this!",
      icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.educationservice.deleteeducation(education_id.id).subscribe(
          (data: any) => {
            this.educations = this.educations.filter((u: any) => u !== education_id);
          })
        Swal.fire('Deleted!', 'Your file has been deleted.: ', 'success')                                          //delete code--------
      }
    })
  }

  ddoctor = false;
  dtravel = false;
  dhotel = false;
  dbeauty = false;
  deducation = false;
  dvehicle = false;
  dconsultant = false;
  dcontractor = false;
  ddecoration = false;
  destate = false;

  selected() {
    if (this.selectedValue == 'travel') {
      this.dtravel = true;
      this.ddoctor = false;
      this.dhotel = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.ddecoration = false;
      this.destate = false;
      // alert('travel')
    }
    else if (this.selectedValue == 'doctor') {
      this.ddoctor = true;
      this.dtravel = false;
      this.dhotel = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.ddecoration = false;
      this.destate = false;
      // alert('doctor');
    }
    else if (this.selectedValue == 'restaurant') {
      this.dhotel = true;
      this.dtravel = false;
      this.ddoctor = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.ddecoration = false;
      this.destate = false;
    }
    else if (this.selectedValue == 'beauty') {
      this.dbeauty = true;
      this.dhotel = false;
      this.dtravel = false;
      this.ddoctor = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.ddecoration = false;
      this.destate = false;
    }
    else if (this.selectedValue == 'education') {
      this.deducation = true;
      this.dhotel = false;
      this.dtravel = false;
      this.ddoctor = false;
      this.dbeauty = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.ddecoration = false;
      this.destate = false;
    }
    else if (this.selectedValue == 'real-estate') {
      this.destate = true;
      this.dhotel = false;
      this.dtravel = false;
      this.ddoctor = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.ddecoration = false;
    }
    else if (this.selectedValue == 'vehicle') {
      this.dvehicle = true;
      this.dhotel = false;
      this.dtravel = false;
      this.ddoctor = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.ddecoration = false;
      this.destate = false;
    }
    else if (this.selectedValue == 'decoration') {
      this.ddecoration = true;
      this.dhotel = false;
      this.dtravel = false;
      this.ddoctor = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = false;
      this.destate = false;
    }
    else if (this.selectedValue == 'consultant') {
      this.dconsultant = true;
      this.dhotel = false;
      this.dtravel = false;
      this.ddoctor = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dcontractor = false;
      this.ddecoration = false;
      this.destate = false;
    }
    else if (this.selectedValue == 'contractor') {
      this.dhotel = false;
      this.dtravel = false;
      this.ddoctor = false;
      this.dbeauty = false;
      this.deducation = false;
      this.dvehicle = false;
      this.dconsultant = false;
      this.dcontractor = true;
      this.ddecoration = false;
      this.destate = false;
    }
  }
}
