import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Empl } from "../Empl";
import { EmpService } from '../emp.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public searchtext: string;
  public Empl:any;
  emps: Empl[];
  selectedEmp: Empl;  
  
  constructor(
    private route: ActivatedRoute,
    private empservice: EmpService,
    private location: Location) { }

  ngOnInit() {
    // this.route.params.subscribe((params)=>{
    // var empname = params["name"];
    // });
    this.getEmp();
    this.Empl=[
  { id: 11, name: 'Mangesh Joshi',Address:'afkbfpoj',Phone:8806619644,Email:'xyz@gmail.com', Designation:'ABC',Grade:3.1 },
  { id: 12, name: 'Aniket Dange', Address:'afkbfpoj',Phone:8806619644,Email:'xyz@gmail.com', Designation:'ABC',Grade:3.2},
  { id: 13, name: 'Sangeeta Kulkarni',Address:'afkbfpoj',Phone:8806619644,Email:'xyz@gmail.com', Designation:'ABC',Grade:3.3},
  { id: 14, name: 'Emma Watson',Address:'afkbfpoj',Phone:8806619644,Email:'xyz@gmail.com', Designation:'ABC',Grade:5.1 },
  { id: 15, name: 'Alexandra Daddario',Address:'afkbfpoj',Phone:8806619644,Email:'xyz@gmail.com', Designation:'ABC',Grade:7.1 },
];
  }

  // onSelect(emp : Empl): void {
  //   this.selectedEmp = emp;
  // }

  getEmp():void{
    this.empservice.getEmp().subscribe(emps => this.emps = emps);
  }
  goback():void{
    this.location.back();
  }
}
