import { Component, OnInit } from '@angular/core';
import { Empl } from '../Empl';
import { ActivatedRoute } from '@angular/router';
import {EmpService} from '../emp.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  emp: Empl;
  constructor(
    private route: ActivatedRoute,
    private empservice: EmpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRes();
  }

  getRes(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.empservice.getRes(id).subscribe(emp => this.emp = emp);
  }

  goback():void{
    this.location.back();
  }
  Infovisible=false;
  Projectvisible=false;
  hobbiesvisible=false;
  Notesvisible=false;
  
  getInfo(pageIndex){
    switch (pageIndex){
      case 1: this.Infovisible=true;
              this.Projectvisible=false;
              this.hobbiesvisible=false;
              this.Notesvisible=false;
              break;

      case 2: this.Infovisible=false;
              this.Projectvisible=true;
              this.hobbiesvisible=false;
              this.Notesvisible=false;
              break;

      case 3: this.Infovisible=false;
              this.Projectvisible=false;
              this.hobbiesvisible=true;
              this.Notesvisible=false;
              break;

      case 4: this.Infovisible=false;
              this.Projectvisible=false;
              this.hobbiesvisible=false;
              this.Notesvisible=true;
              break;
    }
  }
}
