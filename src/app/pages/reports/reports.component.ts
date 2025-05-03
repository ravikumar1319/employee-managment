import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FieldBase } from '../../shared/models/field-base';
import { InputTextField } from '../../shared/models/input-field';
import { CustomValidator } from '../../shared/utils/validators/custom.validtors';
import { AsyncPipe } from '@angular/common';
import { FormComponent } from '../../shared/components/form/form.component';
import { InputButtonComponent } from '../../shared/components/input-controls/input-button/input-button.component';
import { EmployeeService } from '../../services/employee.service';
import { Reports } from '../../../models/reports.model';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'emp-reports',
  standalone: true,
  imports: [AsyncPipe, FormComponent, InputButtonComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  fields$: Observable<FieldBase<any>[]> | undefined;

  constructor(
    private _employeeServices: EmployeeService,
    private _socketService: SocketService
  ) {
    this._socketService.listen('reportReady').subscribe((res:any) => {
      console.log('Report generated...');
      console.log(res.url)
    })
  }

  ngOnInit(): void {
    this.fields$ = this.getFields()
  }

  getFields(): Observable<FieldBase<any>[]> {
    return of([
      new InputTextField({
        key: 'type',
        label: 'Reports',
        validators: [Validators.required, CustomValidator.noSpaceValidator],
        placeholder: 'Jane007',
      }),
    ]);
  }

  getReport() {
    const data: Partial<Reports> = { type: 'new' }
    this._employeeServices.getReports(data).subscribe(()=>{
      console.log('Report generation started...');
    })
  }
}
