import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environment/environment'
import { Employees } from './../Interface/employees';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  // setGroupFilter$ = new Subject<any>();
	// getGroupFilter = this.setGroupFilter$.asObservable();
  constructor(private http:HttpClient) { }
  getAllEmployees(): Observable<any>{
    return this.http.get<Employees[]>(environment.BASEURL+"employees")
  }
}
