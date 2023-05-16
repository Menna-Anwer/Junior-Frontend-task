import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { TableComponent } from './Components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormComponent } from './Components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FilterPipe } from './Components/Filter/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    // MatTableModule,
    // MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
