import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeesService } from './../../Services/employees.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private EmployeesService:EmployeesService ,public DialogRef:MatDialogRef<FormComponent>) { }
  // @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
 filterEmployeesTable!: FormGroup;

  ngOnInit() {
    this.filterEmployeesTable = new FormGroup({
      name: new FormControl("", Validators.required),
      employment_date: new FormControl("",Validators.required),
      department: new FormControl("", Validators.required),
      salary: new FormControl("",Validators.required),
      experience: new FormControl("",Validators.required)
      
    })
  }
  
  
  get formControlles(){
    return this.filterEmployeesTable.controls;
  }
  getNameErrorMessage(){
    return this.filterEmployeesTable.controls['name'].hasError('required')? 'You must enter a value': '';
  }

  getdateErrorMessage(){
    return this.filterEmployeesTable.controls['employment_date'].hasError('required')? 'You must enter a value': '';
  }
  getdepartmentErrorMessage(){
    return this.filterEmployeesTable.controls['department'].hasError('required')? 'You must enter a value': '';
  }

  getsalaryErrorMessage(){
    return this.filterEmployeesTable.controls['salary'].hasError('required')? 'You must enter a value': '';
  }

  getexperienceErrorMessage(){
    return this.filterEmployeesTable.controls['experience'].hasError('required')? 'You must enter a value': '';
  }

  search(): void {
    let object = {
      name:this.filterEmployeesTable.controls['name'].value,
      //  employment_date:this.filterEmployeesTable.controls['employment_date'].value ,
       experience:this.filterEmployeesTable.controls['experience'].value,
       department:this.filterEmployeesTable.controls['department'].value ,
       salary:this.filterEmployeesTable.controls['salary'].value}
    // this.groupFilters.emit(object);
    this.DialogRef.close(object)
  }

  clearAll(){
    this.filterEmployeesTable.reset();
  }
}
