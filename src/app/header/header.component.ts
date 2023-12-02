import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  theme() {
    document.body.classList.toggle("dark");
  }
  constructor(private router:Router ){}
  header='default';
  uname:any;
  ngOnInit(): void {
    this.router.events.subscribe(
      (val:any) =>{
        if(val.url){
          if(localStorage.getItem('token')){
            this.header='loggedin';
            this.uname=localStorage.getItem('token');
          }
          else if(localStorage.getItem('token')=='AdminOfJustDeal'){
            this.header='loggedin';
            this.router.navigate(['/app-admin']);
          }
          else{
            this.header='default';
          }
        }
      })
  }
  adminpage(){
    if(localStorage.getItem('token') == 'AdminOfJustDeal'){
      this.router.navigate(["/app-admin"]);
    }
    else if(localStorage.getItem('token') !== 'AdminOfJustDeal'){
      alert("you are not admin.....")
      localStorage.removeItem('token');
      localStorage.removeItem('token2');
      localStorage.removeItem('token3');
      localStorage.removeItem('token4');
      localStorage.removeItem('token5');
      this.router.navigate(['/app-login']);
    }
  }

  logout(){ 
    Swal.fire({title: 'Are you sure ?',text: "You Want To Logout!!",
    icon: 'warning',showCancelButton: true,confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
        localStorage.removeItem('token');               //logout code
        localStorage.removeItem('token2');               //logout code
        localStorage.removeItem('token3');               //logout code
        localStorage.removeItem('token4');               //logout code
        localStorage.removeItem('token5');               //logout code
        this.header='default';
        this.router.navigate(["/"]);
        Swal.fire('Logged-Out!','success')
      }
    })
  }

  manageshop(){
    if(!localStorage.getItem('shoptoken') && !localStorage.getItem('shoptoken2') ){
      this.router.navigate(['/shoplogin']);
    }
    else{
      this.router.navigate(['/manage-shop']);
    }
  }
}