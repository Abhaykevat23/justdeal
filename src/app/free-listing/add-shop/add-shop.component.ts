import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/all-admin/doctor-admin/doctor.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelServiceService } from 'src/app/all-admin/travel-admin/travel-service.service';
import { HttpClient } from '@angular/common/http';
import { ShopuserService } from '../shopuser.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  adddoctorform: any;
  addtravelform: any;
  addhotelform: any;
  addcontractorform: any;
  addconsultantform: any;
  addeducationform: any;
  addestateform: any;
  addvehicleform: any;
  addbeautyform: any;
  adddecorationform: any;


  doctorform = false;
  travelform = false;
  hotelform = false;
  contractorform=false;
  consultantform=false;
  educationform=false;
  vehicleform=false;
  decorationform=false;
  beautyform=false;
  estateform=false;

  constructor(private doctor: DoctorService,
    private FormBuilder: FormBuilder, private url: ActivatedRoute, private travelservice: TravelServiceService,
    private router: Router, private http: HttpClient, private shopservice: ShopuserService) {
    this.adddoctorform = this.FormBuilder.group({
      'name': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'field': ['',Validators.required],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'sunday': ['',[Validators.required]],
      'image': ['',[Validators.required]]
    });

    this.addtravelform = this.FormBuilder.group({
      'traveller': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'price': [,[Validators.required,Validators.minLength(3),Validators.pattern('[0-9]+$'),Validators.maxLength(4)]]
    });

    this.addhotelform = this.FormBuilder.group({
      'hotelname': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'veg': ['',[Validators.required]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });

    this.addcontractorform = this.FormBuilder.group({
      'contractorname': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'field': ['',[Validators.required]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });

    this.addconsultantform = this.FormBuilder.group({
      'consultantname': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'price': ['',[Validators.required,Validators.minLength(3),Validators.pattern('[0-9]+$'),Validators.maxLength(4)]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'sunday': ['',[Validators.required]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });

    this.addvehicleform = this.FormBuilder.group({
      'vehiclename': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'field': ['',[Validators.required]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });

    this.adddecorationform = this.FormBuilder.group({
      'decoratorname': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });

    this.addeducationform = this.FormBuilder.group({
      'schoolname': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'field': ['',[Validators.required]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });
    
    this.addbeautyform = this.FormBuilder.group({
      'beautyname': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'field': ['',[Validators.required]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });
    
    this.addestateform = this.FormBuilder.group({
      'estatename': ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
      'image': ['',[Validators.required]],
      'city': ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
      'mobile': ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
      'time': ['',[Validators.required,Validators.minLength(10)]],
      'field': ['',[Validators.required]],
      'address': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
    });

  }

  field: any;


  ngOnInit(): void {
    this.field = this.url.snapshot.params['shopname'];
    if (this.field == 'doctor') {
      this.doctorform = true;
    }
    else if (this.field == 'travel') {
      this.doctorform = false;
      this.hotelform = false;
      this.contractorform=false;
      this.consultantform=false;
      this.educationform=false;
      this.vehicleform=false;
      this.estateform=false;
      this.beautyform=false;
      this.decorationform=false;

      this.travelform = true;
    }
    else if (this.field == 'hotel') {
      this.doctorform = false;
      this.travelform = false;
      this.contractorform=false;
      this.consultantform=false;
      this.educationform=false;
      this.vehicleform=false;
      this.estateform=false;
      this.beautyform=false;
      this.decorationform=false;

      this.hotelform=true;
    }
    else if (this.field == 'contractor') {
      this.doctorform = false;
      this.travelform = false;
      this.hotelform = false;
      this.consultantform=false;
      this.educationform=false;
      this.vehicleform=false;
      this.estateform=false;
      this.beautyform=false;
      this.decorationform=false;

      this.contractorform=true;
    }

    else if (this.field == 'consultant') {
      this.doctorform = false;
      this.travelform = false;
      this.hotelform = false;
      this.contractorform=false;
      this.educationform=false;
      this.vehicleform=false;
      this.estateform=false;
      this.beautyform=false;
      this.decorationform=false;
      this.consultantform=true;
    }
    else if (this.field == 'education') {
      this.doctorform = false;
      this.travelform = false;
      this.hotelform = false;
      this.contractorform=false;
      this.vehicleform=false;
      this.estateform=false;
      this.beautyform=false;
      this.decorationform=false;
      this.consultantform=false;
      this.educationform=true;
    }
    else if (this.field == 'vehicle') {
      this.doctorform = false;
      this.travelform = false;
      this.hotelform = false;
      this.contractorform=false;
      this.educationform=false;
      this.estateform=false;
      this.beautyform=false;
      this.decorationform=false;
      this.consultantform=false;
      this.vehicleform=true;
    }
    else if (this.field == 'decoration') {
      this.doctorform = false;
      this.travelform = false;
      this.hotelform = false;
      this.contractorform=false;
      this.educationform=false;
      this.vehicleform=false;
      this.estateform=false;
      this.beautyform=false;
      this.consultantform=false;
      this.decorationform=true;
    }
    else if (this.field == 'beauty') {
      this.doctorform = false;
      this.travelform = false;
      this.hotelform = false;
      this.contractorform=false;
      this.educationform=false;
      this.vehicleform=false;
      this.estateform=false;
      this.decorationform=false;
      this.consultantform=false;
      this.beautyform=true;
    }
    else if (this.field == 'estate') {
      this.doctorform = false;
      this.travelform = false;
      this.hotelform = false;
      this.contractorform=false;
      this.educationform=false;
      this.vehicleform=false;
      this.beautyform=false;
      this.decorationform=false;
      this.consultantform=false;
      this.estateform=true;
    }
  }
  user=localStorage.getItem('shoptoken3');
  adddoctor(doctorform1: { value: { name: any; image: any; city: any; time: any; address: any; sunday: any; mobile: any; field: any; shopfield:any ;user:any }; }) {
    this.shopservice.requestdoctor(doctorform1.value.name, doctorform1.value.image, doctorform1.value.city, doctorform1.value.time, doctorform1.value.address, doctorform1.value.sunday, doctorform1.value.mobile, doctorform1.value.field,'doctor',this.user ).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME");
      }
    );
  }
  addtravel(travelform1: { value: { traveller: any; image: any; city: any; price: any; mobile: any; shopfield:any ;user:any}; }) {
    this.shopservice.requesttravel(travelform1.value.traveller, travelform1.value.image, travelform1.value.city, travelform1.value.price, travelform1.value.mobile ,'travel',this.user ).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }
  addhotel(hotelform1: { value: { hotelname: any; image: any; city: any; veg: any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requesthotel(hotelform1.value.hotelname, hotelform1.value.image, hotelform1.value.city, hotelform1.value.veg, hotelform1.value.mobile , hotelform1.value.address, hotelform1.value.time,'hotel',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }
  addcontractor(contractorform1: { value: { contractorname: any; image: any; city: any; field: any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requestcontractor(contractorform1.value.contractorname, contractorform1.value.image, contractorform1.value.city, contractorform1.value.field, contractorform1.value.mobile , contractorform1.value.address, contractorform1.value.time,'contractor',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }
  addconsultant(consultantform1: { value: { consultantname: any; image: any; city: any; price: any;sunday:any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requestconsultant(consultantform1.value.consultantname, consultantform1.value.image, consultantform1.value.city, consultantform1.value.price,consultantform1.value.sunday, consultantform1.value.mobile , consultantform1.value.address, consultantform1.value.time,'consultant',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }
  addvehicle(vehicleform1: { value: { vehiclename: any; image: any; city: any;field:any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requestvehicle(vehicleform1.value.vehiclename, vehicleform1.value.image, vehicleform1.value.city,vehicleform1.value.field, vehicleform1.value.mobile , vehicleform1.value.address, vehicleform1.value.time,'vehicle',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }

  addestate(estateform1: { value: { estatename: any; image: any; city: any;field:any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requestestate(estateform1.value.estatename, estateform1.value.image, estateform1.value.city,estateform1.value.field, estateform1.value.mobile , estateform1.value.address, estateform1.value.time,'estate',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }

  addbeauty(beautyform1: { value: { beautyname: any; image: any; city: any;field:any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requestbeauty(beautyform1.value.beautyname, beautyform1.value.image, beautyform1.value.city,beautyform1.value.field, beautyform1.value.mobile , beautyform1.value.address, beautyform1.value.time,'beauty',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }

  adddecoration(decorationform1: { value: { decoratorname: any; image: any; city: any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requestdecoration(decorationform1.value.decoratorname, decorationform1.value.image, decorationform1.value.city,decorationform1.value.mobile , decorationform1.value.address, decorationform1.value.time,'decoration',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }

  addeducation(educationform1: { value: { schoolname: any; image: any; city: any;field:any; mobile: any;address: any;time: any; shopfield:any ;user:any}; }) {
    this.shopservice.requesteducation(educationform1.value.schoolname, educationform1.value.image, educationform1.value.city,educationform1.value.field,educationform1.value.mobile , educationform1.value.address, educationform1.value.time,'education',this.user).pipe(first()).subscribe(
      (data: any) => {
        Swal.fire("Request Success ", "Wait For JD Approvel", "success");
      },
      (error: any) => {
        alert("DATA NOT INSERTED , CHANGE NAME or Check data properly .");
      }
    );
  }

  get name() { return this.adddoctorform.get('name'); }
  get image() { return this.adddoctorform.get('image'); }
  get doctorfield() { return this.adddoctorform.get('field'); }
  get city() { return this.adddoctorform.get('city'); }                 //doctor
  get mobile() { return this.adddoctorform.get('mobile'); }
  get address() { return this.adddoctorform.get('address'); }
  get sunday() { return this.adddoctorform.get('sunday'); }
  get time() { return this.adddoctorform.get('time'); }


  
  get traveller() { return this.addtravelform.get('traveller'); }
  get travelcity() { return this.addtravelform.get('city'); }
  get travelmobile() { return this.addtravelform.get('mobile'); }         //travel
  get price() { return this.addtravelform.get('price'); }
  get travelimage() { return this.addtravelform.get('image'); }


  get hotelname() { return this.addhotelform.get('hotelname'); }
  get hotelcity() { return this.addhotelform.get('city'); }
  get hotelmobile() { return this.addhotelform.get('mobile'); }           //hotel
  get hotelveg() { return this.addhotelform.get('veg'); }
  get hoteltime() { return this.addhotelform.get('time'); }
  get hoteladdress() { return this.addhotelform.get('address'); }
  get hotelimage() { return this.addhotelform.get('image'); }

  get schoolname() { return this.addeducationform.get('schoolname'); }
  get educationcity() { return this.addeducationform.get('city'); }
  get educationmobile() { return this.addeducationform.get('mobile'); }           //education
  get educationfield() { return this.addeducationform.get('field'); }
  get educationtime() { return this.addeducationform.get('time'); }
  get educationaddress() { return this.addeducationform.get('address'); }
  get educationimage() { return this.addeducationform.get('image'); }

  get beautyname() { return this.addbeautyform.get('beautyname'); }
  get beautycity() { return this.addbeautyform.get('city'); }
  get beautymobile() { return this.addbeautyform.get('mobile'); }           //beauty
  get beautyfield() { return this.addbeautyform.get('field'); }
  get beautytime() { return this.addbeautyform.get('time'); }
  get beautyaddress() { return this.addbeautyform.get('address'); }
  get beautyimage() { return this.addbeautyform.get('image'); }

  get estatename() { return this.addestateform.get('estatename'); }
  get estatecity() { return this.addestateform.get('city'); }
  get estatemobile() { return this.addestateform.get('mobile'); }           //estate
  get estatefield() { return this.addestateform.get('field'); }
  get estatetime() { return this.addestateform.get('time'); }
  get estateaddress() { return this.addestateform.get('address'); }
  get estateimage() { return this.addestateform.get('image'); }
  
  get decoratorname() { return this.adddecorationform.get('decoratorname'); }
  get decorationcity() { return this.adddecorationform.get('city'); }
  get decorationmobile() { return this.adddecorationform.get('mobile'); }           //decoration
  get decorationtime() { return this.adddecorationform.get('time'); }
  get decorationaddress() { return this.adddecorationform.get('address'); }
  get decorationimage() { return this.adddecorationform.get('image'); }

  get vehiclename() { return this.addvehicleform.get('vehiclename'); }
  get vehiclecity() { return this.addvehicleform.get('city'); }
  get vehiclemobile() { return this.addvehicleform.get('mobile'); }       //vehicle
  get vehiclefield() { return this.addvehicleform.get('field'); }
  get vehicletime() { return this.addvehicleform.get('time'); }
  get vehicleaddress() { return this.addvehicleform.get('address'); }
  get vehicleimage() { return this.addvehicleform.get('image'); }

  get contractorname() { return this.addcontractorform.get('contractorname'); }
  get contractorcity() { return this.addcontractorform.get('city'); }
  get contractormobile() { return this.addcontractorform.get('mobile'); }
  get contractorfield() { return this.addcontractorform.get('field'); }           //contractor
  get contractortime() { return this.addcontractorform.get('time'); }
  get contractoraddress() { return this.addcontractorform.get('address'); }
  get contractorimage() { return this.addcontractorform.get('image'); }

  get consultantname() { return this.addconsultantform.get('consultantname'); }
  get consultantcity() { return this.addconsultantform.get('city'); }
  get consultantmobile() { return this.addconsultantform.get('mobile'); }
  get consultantfield() { return this.addconsultantform.get('field'); }             //consultant
  get consultantsunday() { return this.addconsultantform.get('sunday'); }
  get consultantprice() { return this.addconsultantform.get('price'); }
  get consultanttime() { return this.addconsultantform.get('time'); }
  get consultantaddress() { return this.addconsultantform.get('address'); }
  get consultantimage() { return this.addconsultantform.get('image'); }

}

