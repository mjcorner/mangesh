import { Component, OnInit, Input } from '@angular/core';
import { Empl } from '../Empl';
import { ActivatedRoute } from '@angular/router';
import {EmpService} from '../emp.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  emp: Empl;
  constructor(
    private route: ActivatedRoute,
    private empservice: EmpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEm();
  }
  getEm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empservice.getEm(id).subscribe(emp => this.emp = emp);
  }

  goback():void{
    this.location.back();
  }

}
