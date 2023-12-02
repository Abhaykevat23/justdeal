import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent{
  constructor(private router:Router ){}

  builder='builder';
  architech='architech';
}
