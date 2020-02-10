import { Injectable } from '@angular/core';
import { Empl } from './Empl';
import { Employes } from './Emplist';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getEmp(): Observable<Empl[]>{
    return of(Employes);
  }
  getEm(id:number):Observable<Empl>{
    return of(Employes.find(emp => emp.id === id));
  }
  
  getRes(id:number):Observable<Empl>{
    return of(Employes.find(emp => emp.id === id));
  }
}
