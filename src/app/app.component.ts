import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Store } from '@ngrx/store';
import { employeeActions } from './store/actions/employee.actions';

@Component({
  selector: 'emp-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'empoylee-management-new';
  constructor(
   
  ) {
  }
  
  ngOnInit(): void {
    
  }
}
