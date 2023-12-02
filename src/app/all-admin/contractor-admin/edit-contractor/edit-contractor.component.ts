import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ContractorService } from '../contractor.service';

@Component({
  selector: 'app-edit-contractor',
  templateUrl: './edit-contractor.component.html',
  styleUrls: ['./edit-contractor.component.css']
})
export class EditContractorComponent {
  editcontractor: any;
  contractor_id: any;

  constructor(private FormBuilder: FormBuilder, private url: ActivatedRoute,
    private router: Router, private http: HttpClient,private contractorservice:ContractorService){

      this.editcontractor = this.FormBuilder.group({
        id:[],
        contractorname: ['',[Validators.pattern('[a-zA-Z]+[ ]+[a-zA-Z]+$'),Validators.required,Validators.minLength(3)]],
        image: ['',[Validators.required]],
        city: ['',[Validators.pattern('[a-z]+$'),Validators.required,Validators.minLength(4)]],
        mobile: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+$'),Validators.maxLength(10)]],
        time: ['',[Validators.required,Validators.minLength(10)]],
        field: ['',[Validators.required]],
        address: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(40)]]
      });
  }


  ngOnInit(): void {
    this.contractor_id = this.url.snapshot.params['id'];
    // alert(this.contractor_id)
    if (this.contractor_id > 0) {
      this.contractorservice.getSinglecontractor(this.contractor_id).subscribe(
        (data: any) => {
          this.editcontractor.patchValue(data.data);
        }
      )
    }
  }

  edit() {
    this.contractorservice.updatecontractor(this.editcontractor.value).subscribe(
      (data: any) => {
        Swal.fire("Great!", "Record Edited !", "success"); 
        console.log(data);
        this.router.navigate(['/']);
      },
      error => {
        alert(error);
      });
  }

  
  get contractorname() { return this.editcontractor.get('contractorname'); }
  get contractorcity() { return this.editcontractor.get('city'); }
  get contractormobile() { return this.editcontractor.get('mobile'); }           //contractor
  get contractorfield() { return this.editcontractor.get('field'); }
  get contractortime() { return this.editcontractor.get('time'); }
  get contractoraddress() { return this.editcontractor.get('address'); }
  get contractorimage() { return this.editcontractor.get('image'); }
}
