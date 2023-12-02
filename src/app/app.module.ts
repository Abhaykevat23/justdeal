import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { DoctorComponent } from './doctors/doctor/doctor.component';
import { ContractorComponent } from './contractor/contractor/contractor.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { RealEstateComponent } from './real-estate/real-estate/real-estate.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayTravelComponent } from './display-travel/display-travel.component';
import { EditTravelComponent } from './all-admin/travel-admin/edit-travel/edit-travel.component';
import { AddTravelComponent } from './all-admin/travel-admin/add-travel/add-travel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
// import { MatLabelModule } from '@angular/material/';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { AdminComponent } from './all-admin/admin/admin.component';
import { AddDoctorComponent } from './all-admin/doctor-admin/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './all-admin/doctor-admin/edit-doctor/edit-doctor.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkinComponent } from './doctors/skin/skin.component';
import { FreeListingComponent } from './free-listing/free-listing.component';
import { BookComponent } from './book/book.component';
import { SignupComponent } from './login/signup/signup.component';
import { ForgetComponent } from './login/forget/forget.component';
import { FooterComponent } from './footer/footer.component';
import { AddShopComponent } from './free-listing/add-shop/add-shop.component';
import { ShoploginComponent } from './free-listing/shoplogin/shoplogin.component';
import { ShopSignupComponent } from './free-listing/shop-signup/shop-signup.component';
import { ManageShopComponent } from './free-listing/manage-shop/manage-shop.component';
import { AddHotelComponent } from './all-admin/hotel-admin/add-hotel/add-hotel.component';
import { EditHotelComponent } from './all-admin/hotel-admin/edit-hotel/edit-hotel.component';
import { EstateComponent } from './real-estate/estate/estate.component';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { EducationComponent } from './education/education/education.component';
import { DecorationComponent } from './decoration/decoration.component';
import { BeautyComponent } from './beauty/beauty/beauty.component';
import { BeautyTypeComponent } from './beauty/beauty-type/beauty-type.component';
import { EducationTypeComponent } from './education/education-type/education-type.component';
import { VehicleTypeComponent } from './vehicle/vehicle-type/vehicle-type.component';
import { ContractorTypeComponent } from './contractor/contractor-type/contractor-type.component';
import { EditBeautyComponent } from './all-admin/beauty-admin/edit-beauty/edit-beauty.component';
import { EditConsultantComponent } from './all-admin/consultant-admin/edit-consultant/edit-consultant.component';
import { EditContractorComponent } from './all-admin/contractor-admin/edit-contractor/edit-contractor.component';
import { EditDecorationComponent } from './all-admin/decoration-admin/edit-decoration/edit-decoration.component';
import { EditEducationComponent } from './all-admin/education-admin/edit-education/edit-education.component';
import { EditEstateComponent } from './all-admin/estate-admin/edit-estate/edit-estate.component';
import { EditVehicleComponent } from './all-admin/vehicle-admin/edit-vehicle/edit-vehicle.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    DoctorComponent,
    ContractorComponent,
    ConsultantComponent,
    RealEstateComponent,
    RestaurantComponent,
    DisplayTravelComponent,
    EditTravelComponent,
    AddTravelComponent,
    AdminComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    SkinComponent,
    FreeListingComponent,
    BookComponent,
    SignupComponent,
    ForgetComponent,
    FooterComponent,
    AddShopComponent,
    ShoploginComponent,
    ShopSignupComponent,
    ManageShopComponent,
    AddHotelComponent,
    EditHotelComponent,
    EstateComponent,
    VehicleComponent,
    EducationComponent,
    DecorationComponent,
    BeautyComponent,
    BeautyTypeComponent,
    EducationTypeComponent,
    VehicleTypeComponent,
    ContractorTypeComponent,
    EditBeautyComponent,
    EditConsultantComponent,
    EditContractorComponent,
    EditDecorationComponent,
    EditEducationComponent,
    EditEstateComponent,
    EditVehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgbRatingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }