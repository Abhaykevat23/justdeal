import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './all-admin/admin/admin.component';
import { AddDoctorComponent } from './all-admin/doctor-admin/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './all-admin/doctor-admin/edit-doctor/edit-doctor.component';
import { AddTravelComponent } from './all-admin/travel-admin/add-travel/add-travel.component';
import { EditTravelComponent } from './all-admin/travel-admin/edit-travel/edit-travel.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ContractorComponent } from './contractor/contractor/contractor.component';
import { DoctorComponent } from './doctors/doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RealEstateComponent } from './real-estate/real-estate/real-estate.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DisplayTravelComponent } from './display-travel/display-travel.component';
import { SkinComponent } from './doctors/skin/skin.component';
import { FreeListingComponent } from './free-listing/free-listing.component';
import { BookComponent } from './book/book.component';
import { SignupComponent } from './login/signup/signup.component';
// import { AuthGuard } from './auth.guard';
import { AddShopComponent } from './free-listing/add-shop/add-shop.component';
import { ShoploginComponent } from './free-listing/shoplogin/shoplogin.component';
import { ShopSignupComponent } from './free-listing/shop-signup/shop-signup.component';
import { ForgetComponent } from './login/forget/forget.component';
import { ManageShopComponent } from './free-listing/manage-shop/manage-shop.component';
import { AddHotelComponent } from './all-admin/hotel-admin/add-hotel/add-hotel.component';
import { EditHotelComponent } from './all-admin/hotel-admin/edit-hotel/edit-hotel.component';
import { EstateComponent } from './real-estate/estate/estate.component';
import { ContractorTypeComponent } from './contractor/contractor-type/contractor-type.component';
import { DecorationComponent } from './decoration/decoration.component';
import { VehicleTypeComponent } from './vehicle/vehicle-type/vehicle-type.component';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { EducationComponent } from './education/education/education.component';
import { EducationTypeComponent } from './education/education-type/education-type.component';
import { BeautyComponent } from './beauty/beauty/beauty.component';
import { BeautyTypeComponent } from './beauty/beauty-type/beauty-type.component';
import { EditBeautyComponent } from './all-admin/beauty-admin/edit-beauty/edit-beauty.component';
import { EditConsultantComponent } from './all-admin/consultant-admin/edit-consultant/edit-consultant.component';
import { EditVehicleComponent } from './all-admin/vehicle-admin/edit-vehicle/edit-vehicle.component';
import { EditContractorComponent } from './all-admin/contractor-admin/edit-contractor/edit-contractor.component';
import { EditDecorationComponent } from './all-admin/decoration-admin/edit-decoration/edit-decoration.component';
import { EditEducationComponent } from './all-admin/education-admin/edit-education/edit-education.component';
import { EditEstateComponent } from './all-admin/estate-admin/edit-estate/edit-estate.component';
const routes: Routes = [
  // { path: 'dashboard', component: HomeComponent,canActivate: [AuthGuard] },
  {
    component: LoginComponent,
    path: "app-login",
  },
  {
    component: ProfileComponent,
    path: 'app-profile',
  },
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component: RestaurantComponent,
    path: 'restaurant'
  },
  {
    component: ForgetComponent,
    path: 'forgot'
  },
  {
    component: ConsultantComponent,
    path: 'consultant'
  },
  {
    component: ContractorComponent,
    path: 'contractor'
  },
  {
    component: DoctorComponent,
    path: 'doctor'
  },
  {
    component: RealEstateComponent,
    path: 'real-estate'
  },
  {
    component:SignupComponent,
    path:'signupform'
  },
  {
    component:AddHotelComponent,
    path:'add-hotel'
  },
  {
    component:EditHotelComponent,
    path:'edit-hotel/:id'
  },
  {
    component:ManageShopComponent,
    path:'manage-shop'
  },
  {
    component:ShopSignupComponent,
    path:'shopsignup'
  },
  {
    component:ShoploginComponent,
    path:'shoplogin'
  },
  {
    component:AddShopComponent,
    path:'add-shop/:shopname'
  },
  {
    component:AdminComponent,         //ADMIN 
    path:'app-admin',
    // canActivate: [AuthGuard]
  },
  {
    component:AddDoctorComponent,         //admin
    path:'add-doctor'
  },
  {
    component:EditDoctorComponent,        //admin
    path:'edit-doctor/:id'
  },
  {
    component:EditTravelComponent,        //admin
    path:'edit-travel/:id'
  },
  {
    component:AddTravelComponent,         //admin
    path:'add-travel'
  },
  
  {
    component:DisplayTravelComponent,
    path:'display-travel'
  },
  {
    component:SkinComponent,
    path:'skin/:doctor'
  },
  {
    component:BookComponent,
    path:'book/:id/:field'
  },
  {
    component:FreeListingComponent,
    path:'free-listing'
  },
  {
    component:EstateComponent,
    path:'estate/:type'
  },
  {
    component:ContractorTypeComponent,
    path:'contractor-type/:type'
  },
  {
    component:DecorationComponent,
    path:'decoration'
  },
  {
    component:VehicleTypeComponent,
    path:'vehicle-type/:type'
  },
  {
    component:VehicleComponent,
    path:'vehicle'
  },
  {
    component:EducationComponent,
    path:'education'
  },
  {
    component:EducationTypeComponent,
    path:'education-type/:type'
  },
  {
    component:BeautyComponent,
    path:'beauty'
  },
  {
    component:BeautyTypeComponent,
    path:'beauty-type/:type'
  },
  {
    component:EditBeautyComponent,
    path:'edit-beauty/:id'
  },
  {
    component:EditConsultantComponent,
    path:'edit-consultant/:id'
  },
  {
    component:EditVehicleComponent,
    path:'edit-vehicle/:id'
  },
  {
    component:EditContractorComponent,
    path:'edit-contractor/:id'
  },
  {
    component:EditDecorationComponent,
    path:'edit-decoration/:id'
  },
  {
    component:EditEducationComponent,
    path:'edit-education/:id'
  },
  {
    component:EditEstateComponent,
    path:'edit-estate/:id'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
