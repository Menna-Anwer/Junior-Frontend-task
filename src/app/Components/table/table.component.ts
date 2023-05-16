import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employees } from './../../Interface/employees';
import { EmployeesService } from './../../Services/employees.service';
import { FormComponent } from './../form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() groupFilters!: Object;
	@Input() searchByKeyword!: string;

  constructor(public MatDialog: MatDialog ,private EmployeesService:EmployeesService){}
 
  dataSource = new MatTableDataSource<Employees>([]);;
  employees: any[] = [];
  private paginator!: MatPaginator;
  private sort!:MatSort;
 
  displayedColumns = [
    'No',
    'name',
    'department',
    'employment_date',
    'salary',
    'Experience',
  ];

  ngOnInit(): void {
   this.getEmployees()
  }
 
 
  openDialog(): void{
    const dialogRef = this.MatDialog.open(FormComponent,{
      width:'400px',
      data: {teacher: null}
    });
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  getEmployees(){
    return this.EmployeesService.getAllEmployees().subscribe((res:any)=>{
       this.dataSource.data =res
    })
  }
}


